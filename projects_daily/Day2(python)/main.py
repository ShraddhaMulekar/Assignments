# main.py
from dotenv import load_dotenv
import os
from llm_client import LLMClient
from study_helper import StudyHelper
from utils import show_menu
load_dotenv()
llm = LLMClient(os.getenv("GROQ_API_KEY"))
helper = StudyHelper(llm)

while True:
    show_menu()
    choice = input("Choose option: ")
    if choice == "1":
        topic = input("Enter topic: ")
        print(helper.explain(topic))
    elif choice == "2":
        text = input("Enter text: ")
        print(helper.summarize(text))
    elif choice == "3":
        topic = input("Enter topic: ")
        print(helper.quiz(topic))
    elif choice == "4":
        print("Goodbye 👋")
        break
    else:
        print("Invalid choice, try again.")