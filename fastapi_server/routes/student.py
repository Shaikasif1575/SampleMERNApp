from fastapi import APIRouter
from database import student_collection
from models import Student_model

student_router=APIRouter(prefix="/student",tags=["student"])

@student_router.post("/addstudent")
def addStudent(stu:Student_model):
    result=student_collection.insert_one(stu.model_dump())
    return "student inserted success"

@student_router.put("/updatestudent")
def updateStudent():
    return "update student method called"

@student_router.delete("/deletestudent")
def deleteStudent():
    return "delete student method called"

@student_router.get("/getstudent")
def getStudent():
    return "get student method called"
