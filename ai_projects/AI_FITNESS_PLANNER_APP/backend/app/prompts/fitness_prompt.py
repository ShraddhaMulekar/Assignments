def generate_fitness_prompt(data):
    return f"""
    Create a personalized fitness and diet plan.

    Age : {data.age}
    Height : {data.height} cm
    Weight : {data.weight} kg
    Gender : {data.gender}
    Goal : {data.goal}
    Activity Level : {data.activity_level}

    Return ONLY JSON in this format:

    {{
    "health_metrics": {{
    "bmi": "",
    "bmi_category": "",
    "recommended_calories": ""
    }},
    "workout_plan": {{
    "title": "7 Day Workout Plan",
    "days": [
        {{"day":"Day 1","workout":""}},
        {{"day":"Day 2","workout":""}},
        {{"day":"Day 3","workout":""}},
        {{"day":"Day 4","workout":""}},
        {{"day":"Day 5","workout":""}},
        {{"day":"Day 6","workout":""}},
        {{"day":"Day 7","workout":""}}
    ]
    }},
    "diet_plan": {{
    "days":[
        {{"day":"Day 1","diet":""}},
        {{"day":"Day 2","diet":""}},
        {{"day":"Day 3","diet":""}},
        {{"day":"Day 4","diet":""}},
        {{"day":"Day 5","diet":""}},
        {{"day":"Day 6","diet":""}},
        {{"day":"Day 7","diet":""}}
    ]
    }}
    }}

    Do not return anything outside JSON.
    """

    return prompt