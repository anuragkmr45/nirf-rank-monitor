from fastapi import FastAPI ,HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Nirf(BaseModel):
    TLR:float
    RPC:float
    GO:float
    OI:float
    PERCEPTION:float
    
@app.get("/")
def demoNirf():
    data = "This is a simple data response."
    return {"data": data}

@app.post("/detail/nirf")
def dataNirf(item:Nirf):
    try:
    
        return {"value":item.TLR}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Server problem")    
            
    