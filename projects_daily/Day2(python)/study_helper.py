class StudyHelper:
    def __init__(self, llm_client):
        self.llm=llm_client

    def explain(self, topic):
        return self.llm.ask(f"Explain {topic} in simple beginner-friendly words.")
    
    def summerize(self, text):
        return self.llm.ask(f"Summarize this text simply:\n{text}")
    
    def quiz(self, topic):
        return self.llm.ask(f"Create 3 quiz questions on {topic} with answers.")
