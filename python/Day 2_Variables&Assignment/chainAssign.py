# Assign the same value to multiple variables.

x = y = z = 0
print(f"Initial: x={x}, y={y}, z={z}")

# They all reference the same value
print(f"Same object? {id(x) == id(y) == id(z)}")

wins = losses = draws = 0
print(f"\nGame stats: Wins={wins}, Losses={losses}, Draws={draws}")

# Update independently
wins = 5
losses = 3
draws = 2
print(f"After games: Wins={wins}, Losses={losses}, Draws={draws}")
print(f"Same object? {id(wins) == id(losses) == id(draws)}")

list1 = list2 = [1, 2, 3]  # Both reference same list
list1.append(4)
print(f"\nlist1: {list1}")
print(f"list2: {list2}")  # Also changed!

# Better for mutable objects:
list3 = [1, 2, 3]
list4 = [1, 2, 3]  # Separate objects
list3.append(4)
print(f"\nlist3: {list3}")
print(f"list4: {list4}")  # Unchanged