
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)

# response = client.chat.completions.create(
response = client.responses.create(
    # messages=[{"role": "user", "content": "Explain the importance of fast language models"}],
    input="Explain the importance of fast language models",
    model="llama-3.3-70b-versatile",
)
# print(response.choices[0].message.content)
print(response.output_text)