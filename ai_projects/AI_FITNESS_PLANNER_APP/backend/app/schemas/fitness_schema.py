from pydantic import BaseModel

class FitnessRequest(BaseModel):
    height : float
    weight : float
    age : int
    gender : str
    goal : str
    activity_level : str