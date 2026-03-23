# Constants are written in ALL_CAPS (convention)
PI = 3.14159
GRAVITY = 9.81
SPEED_OF_LIGHT = 299792458  # meters per second
MAX_ATTEMPTS = 3
TAX_RATE = 0.08
DAYS_IN_WEEK = 7

# Using constants in calculations
radius = 10
circumference = 2 * PI * radius
print(f"Circumference of circle with radius {radius}: {circumference:.2f}")

# Physics calculation
mass = 5  # kg
weight = mass * GRAVITY
print(f"Weight of {mass}kg object: {weight}N")

# Business calculation
subtotal = 100
tax = subtotal * TAX_RATE
total = subtotal + tax
print(f"\nSubtotal: ${subtotal}")
print(f"Tax ({TAX_RATE*100}%): ${tax}")
print(f"Total: ${total}")