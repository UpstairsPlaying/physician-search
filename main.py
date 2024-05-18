from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

app = FastAPI()

class Physician(BaseModel):
    name: str
    specialty: str
    location: str

@app.get("/searchPhysician", response_model=Physician)
def search_physician(name: str):
    try:
        # Mock response for demonstration
        return {"name": name, "specialty": "Cardiology", "location": "New York"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
