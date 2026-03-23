temp_data = "Temporary information"
old_value = 42
test_list = [1, 2, 3]

print("Variables before deletion:")
print(f"temp_data: {temp_data}")
print(f"old_value: {old_value}")
print(f"test_list: {test_list}")

# Delete a variable
del temp_data
print("\nAfter del temp_data:")
# print(temp_data)  # This would cause NameError

del old_value
# print(old_value)  # This would cause NameError

del test_list
# print(test_list)  # This would cause NameError


# Practical use: Free up memory
large_data = [i for i in range(1000000)]  # Big list
print(f"\nCreated large list with {len(large_data)} items")
del large_data  # Free the memory
print("Large list deleted to free memory", {large_data})