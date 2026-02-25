from pathlib import Path
from pydantic_settings import BaseSettings

Backend_Root = Path(__file__).resolve().parent.parent

class Settings(BaseSettings):
        app_name:str = "Real Estate FAQ Assistant"
        openai_api_key: str | None = None
        database_url: str = f"sqlite:///{str(Backend_Root / 'real_estate.db')}"
        chroma_persist_directory: str = str(Backend_Root / 'chroma_db')
        faq_docs_path: str = str(Backend_Root / 'data' / 'faq')

class Config:
        env_file = str(Backend_Root / '.env')
        env_file_encoding = 'utf-8'
        extra = "ignore"

settings = Settings()