from app.core.security import Security

token = Security.create_access_token(
    {
        "sub": "admin@helix.ai"
    }
)

print("Generated JWT Token:")
print(token)