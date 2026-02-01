from groq import Groq

class LLMClient:
    def __init__(self, api_key):
        self.client = Groq(api_key=api_key)

    def ask(self, prompt):
        response = self.client.chat.completions.create(
            messages=[
                {"role": "user", "content": prompt}
            ],
            model="llama-3.1-8b-instant",
        )

        return response.choices[0].message.content