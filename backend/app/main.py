from fastapi import FastAPI

from app.routes.students import router as students_router
from app.routes.teachers import router as teachers_router


app = FastAPI(docs_url="/swagger", redoc_url="/documentation")

@app.get("/")
def home():
    return {"message": "hello! mayank"}


# PATH PARAMTER
# SINGLE PATH PARAMETER
@app.get("/{id}")
def details_according_id(id:int):
    return {"student_id": id}

# MULTIPLE PATH PARAMETER
@app.get("/{student_id}/{subject_id}")
def details_of_subject(student_id: int, subject_id: int):
    return {"student_id": student_id, "subject_id": subject_id}


# QUERY PARAMETER
@app.get("/about")
def based_on_name(age: int):
    return {"age": age}


# Multiple Query Parameters
@app.get("/students")
def get_students(
    age: int,
    department: str
):
    return {
        "age": age,
        "department": department
    }


#include routers
app.include_router(students_router)
app.include_router(teachers_router)