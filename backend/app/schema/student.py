from pydantic import BaseModel, Field, EmailStr



class StudentBase(BaseModel):
    name: str = Field(min_length=5, max_length=30, description="full name", example="Mayank Garg") 
    age: int = Field(ge=18, le=60)
    email: EmailStr 
    department: str

class StudentCreate (StudentBase):
    pass

class StudentUpdate (BaseModel):
    name: str | None = Field(default=None, min_length=5, max_length=30, description="full name", examples="Mayank Garg") 
    age: int | None = Field(default=None, ge=18, le=60) 
    email: EmailStr | None = None
    department: str | None = None
    

class StudentCreate (StudentBase):
    id: int
    is_active: bool

