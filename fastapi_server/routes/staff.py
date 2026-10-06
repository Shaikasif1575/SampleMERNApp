from fastapi import APIRouter
staff_router=APIRouter(prefix="/staff",tags=["staff"])

@staff_router.post("/addstaff")
def addStaff():
    return "get staff method called"

@staff_router.put("/updatestaff")
def updateStaff():
    return "update staff method called"

@staff_router.delete("/deletestaff")
def deleteStaff():
    return "delete staff method called"

@staff_router.get("/getstaff")
def getStaff():
    return "get staff method called"