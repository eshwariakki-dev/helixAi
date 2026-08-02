from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.core.security import get_current_user

from app.schemas.user_settings import UserSettingsUpdate

from app.services.settings_service import SettingsService

router = APIRouter(
    prefix="/settings",
    tags=["Settings"]
)


@router.get("/profile")
def get_profile(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return SettingsService.get_profile(
        db,
        current_user.id
    )


@router.put("/profile")
def update_profile(
    data: UserSettingsUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return SettingsService.update_profile(
        db,
        current_user.id,
        data.name,
        data.email
    )