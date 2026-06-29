from fastapi import FastAPI

from app.routes.students import router as students_router
from app.routes.teachers import router as teachers_router


app = FastAPI(docs_url="/swagger", redoc_url="/documentation")

@app.get("/")
def home():
    return {"message": "hello! mayank"}


# PATH PARAMTER:- Represents the identity of a resource.
# Example
# /students/5
# Meaning
# Student number 5.
# SINGLE PATH PARAMETER
@app.get("/{id}")
def details_according_id(id:int):
    return {"student_id": id}

# MULTIPLE PATH PARAMETER
@app.get("/{student_id}/{subject_id}")
def details_of_subject(student_id: int, subject_id: int):
    return {"student_id": student_id, "subject_id": subject_id}


# QUERY PARAMETER:- Represents filtering, sorting, or searching.
# Example
# /students?age=20
# Meaning
# Show students whose age is 20.
@app.get("/about")
def based_on_name(age: int):
    return {"age": age}


# Multiple Query Parameters
@app.get("/about")
def get_data(
    age: int,
    department: str
):
    return {
        "age": age,
        "department": department
    }

# Optional query parameter
@app.get("/contact")
def get_age(
    age: int | None = None
):
    return {
        "age": age
    }

#include routers
app.include_router(students_router)
app.include_router(teachers_router)