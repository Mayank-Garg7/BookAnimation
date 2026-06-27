from fastapi import FastAPI

from routes.students import router as  students_router
from routes.teachers import router as  teachers_router


app = FastAPI(docs_url="/swagger", redoc_url="/documentation")

@app.get("/")
def home():
    return {"message": "hello! mayank"}

@app.get("/about")
def about():
    return {"message": "this message is from about page"}


#include routers
app.include_router(students_router)
app.include_router(teachers_router)