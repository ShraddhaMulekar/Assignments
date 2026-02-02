import os
import sys
import json
import requests
from dotenv import load_dotenv
from openai import OpenAI
from config import MODEL_NAME, TEMPERATURES

load_dotenv()

groq_key = os.getenv("GROQ_API_KEY")
openai_key = os.getenv("OPENAI_API_KEY")

use_groq = bool(groq_key)

if not groq_key and not openai_key:
    print("❌ No API key found. Set GROQ_API_KEY or OPENAI_API_KEY")
    sys.exit(1)

def load_prompt(file_name, topic):
    with open(f"prompt/{file_name}", "r", encoding="utf-8") as f:
        return f.read().replace("{topic}", topic)

# OpenAI client only if needed
client = None
if not use_groq:
    client = OpenAI(api_key=openai_key)

# ---- UI ----
print("\n📘 AI Study Buddy (Day 3)\n")
print("1. Beginner Explanation")
print("2. Interview Explanation")
print("3. Story Explanation")

choice = input("Choose mode (1/2/3): ")
topic = input("Enter topic: ")

if choice == "1":
    prompt = load_prompt("beginner.txt", topic)
    temperature = TEMPERATURES["beginner"]
elif choice == "2":
    prompt = load_prompt("interview.txt", topic)
    temperature = TEMPERATURES["interview"]
else:
    prompt = load_prompt("story.txt", topic)
    temperature = TEMPERATURES["story"]

# ---- LLM CALL ----
try:
    if use_groq:
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {groq_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": MODEL_NAME,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": temperature
        }

        response = requests.post(url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        data = response.json()
        output = data["choices"][0]["message"]["content"]

    else:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{"role": "user", "content": prompt}],
            temperature=temperature
        )
        output = response.choices[0].message.content

except requests.exceptions.RequestException as e:
    print("❌ Connection error with Groq API")
    print(e)
    sys.exit(1)

except Exception as e:
    print("❌ Unexpected error:", e)
    sys.exit(1)

print("\n🤖 AI Response:\n")
print(output)