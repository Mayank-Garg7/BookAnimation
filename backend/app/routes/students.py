from fastapi import APIRouter

router = APIRouter(
    prefix="/students_router",
    tags="students"
)

@router.get("/")
def all_students():
    return {"students": "list of all students"}