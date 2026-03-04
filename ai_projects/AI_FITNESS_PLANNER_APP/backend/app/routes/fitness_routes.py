from fastapi import APIRouter
from app.schemas.fitness_schema import FitnessRequest
from app.prompts.fitness_prompt import generate_fitness_prompt
from app.services.ai_service import generate_ai_response

router = APIRouter()

@router.post("/generate-plan")
async def generate_plan(data:FitnessRequest):

    prompt = generate_fitness_prompt(data)

    ai_response = generate_ai_response(prompt)

    return {
        "plan" : ai_response
    }
