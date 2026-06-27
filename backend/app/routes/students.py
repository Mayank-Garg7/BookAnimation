from fastapi import APIRouter

router = APIRouter(
    prefix="/students_router",
    tags="students"
)

@router.get("/")
def all_students():
    return {"students": "list of all students"}


@router.post("/")
def add_student(): # we need student's data to add and we have to use pydantic to define schema for request
    return {"student has been added successfully"}



@router.put("/{student_id}")
def update_student_full_info():
    return {"students": "students updated info"}

@router.patch("/{student_id}")
def update_students_rollNumber():
    return {"updated the roll number"}


@router.delete("/{student_id}")
def delete():
    return {"student has been deleted successfully."}