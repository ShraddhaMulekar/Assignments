from pydantic import BaseModel, Field

class ChatMessage(BaseModel):
        role: str = Field(..., description=" 'user' or 'assistant'")
        content: str = Field(..., description="Message content")

class ChatRequest(BaseModel):
        message: str = Field(..., min_length=2, description="User's message")
        history: list[ChatMessage] = Field(default_factory=list, description="Chat conversation history")
        session_id: str | None = Field(default=None, description="Optional session ID for context management")

class ChatResponse(BaseModel):
        reply: str = Field(..., description="Assistant's reply to the user's message")
        session_id: str | None = None

class ContactFormRequest(BaseModel):
        name: str = Field(..., min_length=2,max_length=255, description="Sender's name")
        email: str = Field(..., regex=r'^\S+@\S+\.\S+$',min_length=2, max_length=255, description="Sender's email address")
        subject: str = Field(default="", max_length=500, description="Subject of the message")
        message: str = Field(..., min_length=1, description="Message content")

class ContactFormResponse(BaseModel):
        ok: bool = True
        message: str = "Thank you. We'll get back to you shortly."