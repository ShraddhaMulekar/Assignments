from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.config import settings
from app.database import init_db
from pathlib import Path

_env_path = Path(__file__).parent.parent / ".env"
load_dotenv(_env_path)

app = FastAPI(
    title= settings.app_name,
    description= "A real estate FAQ assistant built with FastAPI and OpenAI's GPT-3.5 Turbo.",
    version= "1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)