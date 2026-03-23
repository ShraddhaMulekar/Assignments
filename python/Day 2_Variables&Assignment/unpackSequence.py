# Unpacking a tuple
point = (3, 5)
x, y = point
print(f"Point coordinates: x={x}, y={y}")

# Unpacking a list
rgb = [255, 128, 0]
red, green, blue = rgb
print(f"\nRGB values: R={red}, G={green}, B={blue}")

# Unpacking with *
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print(f"\nFirst: {first}, type:{type(first)}")
print(f"Middle: {middle}, type:{type(middle)}")
print(f"Last: {last}, type:{type(last)}")

# Unpacking strings
word = "Cat"
c1, c2, c3 = word
print(f"\nLetters: {c1}-{c2}-{c3}")

# Practical example: Split name
full_name = "John Michael pai Doe"
names = full_name.split()
print(f"split name: {names}")
first_name, *middle_names, last_name = names
print(f"\nFirst: {first_name}")
print(f"Middle: {middle_names}")
print(f"Last: {last_name}")
