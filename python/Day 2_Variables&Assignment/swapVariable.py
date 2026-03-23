# Learn the Pythonic way to swap variable values.

# Traditional swap (using temporary variable)
a = 5
b = 10
print(f"Before swap:- a:{a}, b:{b}")

temp=a
a = b
b = temp
print(f"After swap:- a:{a}, b:{b}")

# Pythonic swap (tuple unpacking)
x="first"
y="second"
print(f"x:{x}; y:{y}")

x,y=y,x
print(f"x:{x}; y:{y}")

p,q,r=1,2,3
p,q,r = r,p,q
print(f"p:{p}; q:{q}; r:{r}")