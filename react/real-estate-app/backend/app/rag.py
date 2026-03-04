from app.config import settings
from langchain_community.vector_stores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from pathlib import Path
from langchain_community.document_loaders import TextLoader
from langchain_core.embeddings import Embeddings
from langchain_community.embeddings import HuggingFaceEmbeddings

def get_embeddings() -> Embeddings:
        """Initialize and return the Hugging Face Sentence Transformer embeddings"""
        return HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2", model_kwargs={"device": "cpu"}) 


def load_faq_documents():
        """Load the FAQ documents from the specified directory and return as a list of Document objects"""
        path = Path(settings.faq_docs_path)
        
        documents = []
        for ext in ("*.md", "*.txt"):
                for file_path in path.glob(ext):
                        try:
                                loader = TextLoader(str(file_path))
                                documents.extend(loader.load())
                        except Exception:
                                pass

        return documents


def get_text_splitter():
        """Returns a TextSplitter for splitting the FAQ documents into chunks"""
        return RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)

def build_vector_store() -> Chroma:
        """Build and return the Chroma vector store for the FAQ data"""
        persist_directory = settings.chroma_persist_directory
        embeddings = get_embeddings()

        docs = load_faq_documents()
        splitter = get_text_splitter()
        splits = splitter.split_documents(docs)
        return Chroma.from_documents(
                documents=splits,
                embedding=embeddings,
                persist_directory=persist_directory,
                collection_name="faq",
    )


def get_vector_store() -> Chroma:
        """Initialize and return the Chroma vector store for the FAQ data"""

        vector_store = build_vector_store()

        return vector_store

def get_retriever(k: int = 3):
        """Returns the retrieved docs over the FAQ vector store"""

        return get_vector_store().as_retriever(search_type="similarity", search_kwargs={"k": k})