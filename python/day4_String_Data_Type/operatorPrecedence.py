# Operator precedence demonstration
result1 = 2 + 3 * 4
result2 = (2 + 3) * 4
result3 = 2 ** 3 ** 2
result4 = (2 ** 3) ** 2

print(f"2 + 3 * 4 = {result1}")  # Multiplication first
print(f"(2 + 3) * 4 = {result2}")  # Parentheses first
print(f"2 ** 3 ** 2 = {result3}")  # Right associative
print(f"(2 ** 3) ** 2 = {result4}")  # Left to right with parentheses