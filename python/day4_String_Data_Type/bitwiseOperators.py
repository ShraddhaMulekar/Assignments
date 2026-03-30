# Bitwise operators demonstration
m = 12  # Binary: 1100
n = 10  # Binary: 1010

print(f"m = {m} (binary: {bin(m)}), n = {n} (binary: {bin(n)})")
print(f"m & n = {m & n} (binary: {bin(m & n)})")
print(f"m | n = {m | n} (binary: {bin(m | n)})")
print(f"m ^ n = {m ^ n} (binary: {bin(m ^ n)})")
print(f"~m = {~m} (binary: {bin(~m & 0xFFFF)})")
print(f"m << 2 = {m << 2} (binary: {bin(m << 2)})")
print(f"m >> 2 = {m >> 2} (binary: {bin(m >> 2)})")