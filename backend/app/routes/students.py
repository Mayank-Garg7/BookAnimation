from fastapi import APIRouter

router = APIRouter(
    prefix="/students",
    tags=["students"]
)

@router.get("/")
def all_students():
    return {"students": "list of all students"}


@router.post("/")
def add_student(): # we need student's data to add and we have to use pydantic to define schema for request
    return {"operation":"student has been added successfully"}



@router.put("/{student_id}")
def update_student_full_info(student_id:int):
    return {"students": f"students updated info{student_id}"}

@router.patch("/{student_id}")
def update_students_rollNumber(student_id: int):
    
    return {"updated the roll number" : student_id}


@router.delete("/{student_id}")
def delete_student(student_id:int):
    return {"student has been deleted successfully." : student_id}