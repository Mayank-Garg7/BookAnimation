from fastapi import FastAPI

from app.routes.students import router as students_router
from app.routes.teachers import router as teachers_router


app = FastAPI(docs_url="/swagger", redoc_url="/documentation")

@app.get("/")
def home():
    return {"message": "hello! mayank"}

@app.get("/about")
def about():
    return {"message": "this message is from about page"}


@app.get("/{id}")
def details_according_id(id:int):
    return {"student_id": id}
@app.get("/{student_id}/{subject_id}")
def details_of_subject(student_id: int, subject_id: int):
    return {"student_id": student_id, "subject_id": subject_id}

#include routers
app.include_router(students_router)
app.include_router(teachers_router)