from app.core.security import Security

password = "Helix@123"

hashed = Security.hash_password(password)

print("Hashed Password:")
print(hashed)

print()

print("Password Match:")
print(
    Security.verify_password(
        password,
        hashed
    )
)