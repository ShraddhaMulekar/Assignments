from fastAPI import APIRouter, HTTPException

from app.models import ChatResponse, ChatRequest

from app.graph import run_chat

router = APIRouter(prefix='/api', tags=['chat'])

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
        """Process a user message through RAG + LangGraph FAQ assistant and return the response."""
        try:
                history = [{"role": m.role, "content": m.content} for m in request.history]
                result = run_chat(request.message, history=history)

                return ChatResponse(
                        reply=result["reply"],
                        session_id=request.session_id
                )

        except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))