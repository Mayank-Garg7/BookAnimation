from fastapi import FastAPI

app = FastAPI(docs_url="/swagger", redoc_url="/documentation")

@app.get("/")
def home():
    return {"message": "hello! mayank"}

@app.get("/about")
def about():
    return {"message": "this message is from about page"}