from sqlalchemy.orm import Session

from app.models.user import User


class SettingsService:

    @staticmethod
    def get_profile(db: Session, user_id: int):

        return (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    @staticmethod
    def update_profile(
        db: Session,
        user_id: int,
        name: str,
        email: str,
    ):

        user = (
            db.query(User)
            .filter(User.id == user_id)
            .first()
        )

        if not user:
            return None

        user.name = name
        user.email = email

        db.commit()
        db.refresh(user)

        return user