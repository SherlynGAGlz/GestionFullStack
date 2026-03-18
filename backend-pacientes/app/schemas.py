from pydantic import BaseModel
from typing import Optional
from datetime import date

class PacienteCreate(BaseModel):
    nombre: str
    apellido: str
    fecha_nacimiento: date
    telefono: str
    id_diagnostico: int

class PacienteUpdate(BaseModel):
    nombre: Optional[str]
    apellido: Optional[str]
    fecha_nacimiento: Optional[date]
    telefono: Optional[str]
    id_diagnostico: Optional[int]

class PacienteResponse(BaseModel):
    id_paciente: int
    nombre: str
    apellido: str
    fecha_nacimiento: date
    telefono: str
    id_diagnostico: int