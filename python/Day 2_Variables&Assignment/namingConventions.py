# Explore how Python manages memory for variables.

x = 42
y = 42
z = 43

print(f"x = {x}, id: {id(x)}")
print(f"y = {y}, id: {id(y)}")
print(f"z = {z}, id: {id(z)}")
print(f"x and y point to same object: {id(x) == id(y)}")

str1="hello"
str2="hello"
str3="hello world!"

print(f"str1:{str1}, id: {id(str1)}")
print(f"str2:{str2}, id: {id(str2)}")
print(f"str3:{str3}, id: {id(str3)}")
print(f"str1 and str2 point to same object: {id(str1) == id(str2)}")

list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(f"\nlist1 id: {id(list1)}")
print(f"list2 id: {id(list2)}")
print(f"Lists are different objects: {id(list1) != id(list2)}")