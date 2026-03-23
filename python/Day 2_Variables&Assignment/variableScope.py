global_var = "I'm global"

def my_function():
    local_var="I'm local"
    print(f"local variable: {local_var}")
    print(f"Global variable: {global_var}")

my_function()

print(f"Global variable outside the function: {global_var}")
# print(f"Local variable outside the function: {local_var}")

