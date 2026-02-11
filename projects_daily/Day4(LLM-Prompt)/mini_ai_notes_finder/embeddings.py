import numpy as np
import faiss
from sentence_transformers import SentenceTransformer
from notes import notes

# Load Embedding Model
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

# Convert Notes into Vectors
note_vectors = embedding_model.encode(notes)

# Convert to numpy array with float32 (required by FAISS)
note_vectors = np.array(note_vectors).astype("float32")

# Normalize Vectors (Important for Cosine Similarity)
faiss.normalize_L2(note_vectors)

# Create FAISS Index
# Get vector dimension (example: 384)
dimension = note_vectors.shape[1]

# Create index using Inner Product (IP)
# When vectors are normalized, IP = Cosine Similarity
index = faiss.IndexFlatIP(dimension)

# Add note vectors to index
index.add(note_vectors)

# Function to Search Similar Notes
def search_similar_notes(query: str, top_k: int = 2):
    """
    Takes user query
    Converts it to vector
    Searches for most similar notes
    Returns top_k similar notes
    """

    # Convert query to embedding
    query_vector = embedding_model.encode([query])
    query_vector = np.array(query_vector).astype("float32")

    # Normalize query vector
    faiss.normalize_L2(query_vector)

    # Search in FAISS index
    distances, indices = index.search(query_vector, top_k)

    # Get actual notes from indices
    results = [notes[i] for i in indices[0]]

    return results