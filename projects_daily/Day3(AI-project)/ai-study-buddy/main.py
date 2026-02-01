import os
from dotenv import load_dotenv
from openai import OpenAI
from config import MODEL_NAME, TEMPERATURES

load_dotenv()

def load_prompt(file_name, topic):
    with open(f"prompts/{file_name}", "r") as f:
        template=f.read()
    return template.replace("{topic}", topic)

