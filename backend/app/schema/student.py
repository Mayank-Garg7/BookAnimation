from pydantic import BaseModel, Field, EmailStr, HttpUrl

class createStudent (BaseModel):
    roll_number: int | None = None # this is not required
    name: str = Field(min_length=5, max_length=20, description="Students full name")
    age: int = Field(ge = 18, le = 60)
    department: str = "CSE" # default value for department
    email: EmailStr
    website: HttpUrl



