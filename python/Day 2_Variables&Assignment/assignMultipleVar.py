# Python allows you to assign multiple variables simultaneously.
x,y,z = 10,20,30
print(f"x:{x}; y:{y}; z:{z}")

a=b=c=100
print(f"a:{a}; b:{b}; c:{c}")

# Unpacking from a list or tuple
cordinator = 5.2, 2.9
lat, log = cordinator
print(f"latitude:{lat}; lagitude:{log}")


# Mixed types
name, age, height = "BOB", 28, 4.9
print(f"{name} is {age} years old and {height} feet tall")