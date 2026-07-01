from pydantic import BaseModel, Field, EmailStr



class studentBase(BaseModel):
    name: str = Field(min_length=5, max_length=30, description="full name", examples="Mayank Garg") 
    age: int = Field(ge=18, le=60)
    email: EmailStr 
    department: str

class createStudent (studentBase):
    pass

class updateStudent (BaseModel):
    name: str | None = Field(default=None, min_length=5, max_length=30, description="full name", examples="Mayank Garg") 
    age: int | None = Field(default=None, ge=18, le=60) 
    email: EmailStr | None = None
    department: str | None = None
    

class responseStudent(BaseModel):
    id: int
    isActive: bool

