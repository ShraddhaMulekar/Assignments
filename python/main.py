# varible, list, dist
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

# if - elif - else condition
age = 18
if age > 18:
    print("18+")
elif age < 18:
    print("-18")
else:
    print("18")


# for loop
for i in range(5):
    print('loop:', i)

for i in language:
    print("for loop:", i)


# Function (def)
# math
def add(a,b):
    print(
        f"addition: {a+b}; "
        f"substraction: {a-b}; "
        f"multiplication: {a*b}; "
        f"division: {b/a}; "
        f"modulus: {a%b}."
    )
# add(20,0)

# try / except
try :
    add(20,0)
except :
    print("ZeroDivisionError: integer modulo by zero!")

print("After solved!")
