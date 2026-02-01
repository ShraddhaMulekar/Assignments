import os
from dotenv import load_dotenv
from openai import OpenAI
from config import MODEL_NAME, TEMPERATURES

load_dotenv()

def load_prompt(file_name, topic):
    with open(f"prompts/{file_name}", "r") as f:
        template=f.read()
    return template.replace("{topic}", topic)

#Connect LLM
client = OpenAI(api_key=os.getenv("GROQ_API_KEY"))

#User Input Flow
print("\n📘 AI Study Buddy (Day 3)\n")
print("1. Beginner Explanation")
print("2. Interview Explanation")
print("3. Story Explanation")

choice = input("Choose mode (1/2/3): ")
topic = input("Enter topic: ")