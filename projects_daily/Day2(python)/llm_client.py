from groq import Groq

class LLMClient:
    def __init__(self, api_key):
        self.client = Groq(api_key=api_key)

    def ask(self, prompt):
        response=self.client.responses.create(
            input=prompt,
            model="openai/gpt-oss-20b",
        )

        return response.output_text