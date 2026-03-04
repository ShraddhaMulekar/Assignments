from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv
from langchain_core.messages import BaseMessage
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class ChatState(TypedDict):
        message: str
        history: list[BaseMessage]
        reply: str
        context : str



def build_faq_graph():
        graph = StateGraph(ChatState)

        # Add nodes
        graph.add_node("retrieve_node", retrieve)
        graph.add_node("generate_response_node", generate_response)

        # Add edges
        graph.add_edge(START, "retrieve_node")
        graph.add_edge("retrieve_node", "generate_response_node")
        graph.add_edge("generate_response_node", END)

        return graph.compile()


load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

parser = StrOutputParser()

llm = ChatOpenAI(model="gpt-4o-mini",api_key=OPENAI_API_KEY, temperature=0.0)

def run_chat(message: str, history: list | None = None) -> dict:
        """Run the FAQ graph for one user message. Returns {reply}.
        """

        text = (message or "").strip()
        if not text:
                return {"reply": "How can I assist you with real estate questions related to our website today?"}
        
        # prompt = ChatPromptTemplate.from_messages([
        #         ("system",
        #         """
        #                 You are a domain-specific FAQ assistant for a real estate website.

        #                 STRICT RULES:
        #                 1. Answer ONLY using the information provided in the retrieved FAQ context.
        #                 2. Do NOT use prior knowledge or make assumptions.
        #                 3. If the answer is not explicitly stated in the provided context, respond exactly with:
        #                         "I don't know."
        #                 4. Do NOT infer, extrapolate, or partially guess.
        #                 5. Keep responses concise, factual, and directly relevant to the question.
        #                 6. Do NOT add introductions, explanations, or closing remarks.
        #                 7. Do NOT repeat the question.
        #                 Your output must be a clear, direct answer grounded strictly in the provided FAQ data.
        #         """
        #         ),
        #         {"role": "user", "content": "{message}"},
        # )]

        # reply = (prompt | llm | parser).invoke({"message": text, "history": history or []})
        # return {"reply": reply}

        initial_message:ChatState = {
                "message": message,
                "history": list(history or []),
                "reply": ""
                }

        result = get_faq_graph().invoke(initial_message)