print("=== Variable State Tracking Puzzle ===")
print("Track the values of a, b, c through each step\n")

# Step 1
a = 10
b = 20
c = 30
print(f"Step 1: a={a}, b={b}, c={c}")

# Step 2
a, b = b, a  # Swap a and b
print(f"Step 2 (swap a,b): a={a}, b={b}, c={c}")

# Step 3
c = a + b
print(f"Step 3 (c = a+b): a={a}, b={b}, c={c}")

# Step 4
a = a * 2
b = b // 2
print(f"Step 4 (a*2, b//2): a={a}, b={b}, c={c}")

# Step 5
a, b, c = c, a, b
print(f"Step 5 (rotate): a={a}, b={b}, c={c}")

# Step 6
temp = a
a = b - c
b = temp + c
c = temp
print(f"Step 6 (complex): a={a}, b={b}, c={c}")

print(f"\nFinal values: a={a}, b={b}, c={c}")
print(f"Sum: {a + b + c}")