name = "shraddha"
age = 25
married = True
language = ["HTML", "CSS", "JS"]
address = {
    "city" : "Nagpur",
    "state" : "Maharashtra",
    "pincode" : 440034
}

print(
    f"My Name is {name}."
    f"My Age is {age}."
    f"I am from {address['city']}, {address['state']}- {address['pincode']}."
    f"I learned {language[0]}, {language[1]}, {language[2]}."
    f"I am {'Unmarried' if not married else 'Married'}."
)