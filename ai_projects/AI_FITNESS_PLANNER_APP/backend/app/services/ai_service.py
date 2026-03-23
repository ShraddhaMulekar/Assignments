from groq import Groq
from app.core.config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)

def generate_ai_response(prompt : str):
    chat_completion = client.chat.completions.create(
        messages = [
            {"role":"user", "content":prompt}
        ],
        model = "openai/gpt-oss-20b",
        temperature=0.7
    )

    return chat_completion.choices[0].message.content