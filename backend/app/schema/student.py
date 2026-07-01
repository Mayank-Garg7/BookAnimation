from pydantic import BaseModel

class createStudent (BaseModel):
    name: str
    age: int
    department: str


