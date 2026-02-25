from fastAPI import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from app.models import ContactFormResponse, ContactFormRequest
from app.database import get_db
from app.db.models import ContactFormSubmission


router = APIRouter(prefix='/api', tags=['contact'])


@router.post('/contact', response_model=ContactFormResponse)
def submit_contact_form(payload: ContactFormRequest, db: Session = Depends(get_db)) -> ContactFormResponse:
        """Save contact from information onto the DB (SQLAlchemy)"""
        try:
                submission = ContactFormSubmission(
                        name = payload.name.strip(),
                        email = payload.email.strip(),
                        message = payload.message.strip(),
                        subject = payload.subject.strip() if payload.subject else ""
                )
                db.add(submission)
                db.commit()
                return ContactFormResponse(ok=True, message="Thank you. We'll get back to you shortly.")

        except Exception as e:
                db.rollback()
                raise HTTPException(status_code=500, detail=str(e))