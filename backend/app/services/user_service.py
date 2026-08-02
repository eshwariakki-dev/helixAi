from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate

from app.core.security import Security


class UserService:

    @staticmethod
    def create_user(db: Session, user: UserCreate):

        existing_user = (
            db.query(User)
            .filter(User.email == user.email)
            .first()
        )

        if existing_user:
            raise ValueError("Email already registered")

        hashed_password = Security.hash_password(user.password)

        new_user = User(
            name=user.name,
            email=user.email,
            password=hashed_password,
            role="Admin"
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    @staticmethod
    def authenticate_user(
        db: Session,
        email: str,
        password: str,
    ):

        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        print("=" * 50)
        print("LOGIN DEBUG")
        print("Email:", email)
        print("User Found:", user is not None)

        if not user:
            print("Reason: User not found")
            print("=" * 50)
            return None

        print("Stored Hash:", user.password)

        result = Security.verify_password(
            password,
            user.password
        )

        print("Password Match:", result)
        print("=" * 50)

        if not result:
            return None

        return user

    @staticmethod
    def create_access_token(user):

        token = Security.create_access_token(
            {
                "sub": user.email
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer"
        }

    @staticmethod
    def get_all_users(db: Session):
        return db.query(User).all()

    @staticmethod
    def get_user_by_id(
        db: Session,
        user_id: int,
    ):
        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )