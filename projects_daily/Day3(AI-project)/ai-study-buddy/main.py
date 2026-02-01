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

#Prompt + Temperature
if choice == "1":
    prompt = load_prompt("beginner.txt", topic)
    temperature = TEMPERATURES["beginner"]

elif choice == "2":
    prompt = load_prompt("interview.txt", topic)
    temperature = TEMPERATURES["interview"]

else:
    prompt = load_prompt("story.txt", topic)
    temperature = TEMPERATURES["story"]

#Call LLM
response = client.chat.completions.create(
    model=MODEL_NAME,
    temperature=temperature,
    messages=[
        {"role": "user", "content": prompt}
    ]
)

print("\n🤖 AI Response:\n")
print(response.choices[0].message.content)