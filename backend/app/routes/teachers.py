from fastapi import APIRouter

router = APIRouter(
    prefix="teachers_routes",
    tags="teachers"
)

@router.get("/")
def get_teachers():
    return {"teacher": "say good morning to teachers"}

