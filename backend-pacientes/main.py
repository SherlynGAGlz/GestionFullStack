from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(title="API Gestión de Pacientes")

# configuration of CORS to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# The routes are included in app/routes.py
app.include_router(router, prefix="/api")

# for root path to verify that the API is working
@app.get("/")
def root():
    return {"mensaje": "API Gestión de Pacientes funcionando"}