def calculate(a, b, operator):
    if(operator == "+"):
        return a + b
    elif(operator == "-"):
        return a - b
    elif(operator == "*"):
        return a * b
    elif(operator == "/"):
        return a / b
    elif(operator == "%"):
        return a % b
    else:
        return("Invalide Operator!")
    
while True:
    try:
        num1 = float(input("Enter your First number: "))
        num2 = float(input("Enter your Second number: "))
        operator = input("Enter operator i.e. +, -, *, /, % : ")

        result = calculate(num1, num2, operator )
        print("Result:", result)

    except ZeroDivisionError:
        print("zero Error: ❌ Cannot divide by zero")

    except ValueError:
        print("value error: ❌ Please enter valid numbers")

    choise = input("Do you want to continue? (yes/no): ")
    if choise.lower() != "yes":
        print("Calculator closed 👋")
        break 