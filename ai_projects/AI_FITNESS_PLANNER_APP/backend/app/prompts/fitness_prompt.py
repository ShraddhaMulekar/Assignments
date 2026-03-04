def generate_fitness_prompt(data):
    return f"""
    Create a personalized fitness and diet plan.

    Age : {data.age}
    Height : {data.height} cm
    Weight : {data.weight} kg
    Gender : {data.gender}
    Goal : {data.goal}
    Activity Level : {data.activity_level}

    Include:
    - Weekly workout routine
    - Daily calorie recommendation
    - Diet suggestions
    - Health tips
    """