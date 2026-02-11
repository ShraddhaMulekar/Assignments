"""
Main file for mini_ai_notes_finder

Flow:
1. Take user input
2. Search similar notes using embeddings
3. Send context + question to Groq
4. Print AI explanation
"""

import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage

from embeddings import search_similar_notes


# Load Environment Variables

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("❌ GROQ_API_KEY not found in .env file")


# Initialize Groq LLM

llm = ChatGroq(
    groq_api_key=GROQ_API_KEY,
    model_name="llama-3.1-8b-instant"
)


# Main Program

def main():
    print("📘 Mini AI Notes Finder")
    print("------------------------")

    # Take user input
    user_query = input("\nEnter your question: ")

    # Search similar notes
    similar_notes = search_similar_notes(user_query)

    print("\n🔎 Similar Notes Found:")
    for note in similar_notes:
        print("•", note)

    # Create prompt for Groq
    prompt = f"""
You are a helpful AI tutor.

User Question:
{user_query}

Relevant Notes:
{similar_notes}

Using the relevant notes above,
Explain the answer clearly in simple language.
"""

    # Send to Groq
    response = llm.invoke([HumanMessage(content=prompt)])

    print("\n🤖 AI Explanation:")
    print("------------------------")
    print(response.content)


# Run Program
if __name__ == "__main__":
    main()