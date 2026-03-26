from fastapi import APIRouter, HTTPException
from app.database import get_mysql_connection
from app.schemas import PacienteResponse, ConsultaResponse
from typing import List
# This file defines the endpoints. It gets data from the database and sends the user."


router = APIRouter() #It is used to group and organize endpoints.


#Each endpoint connects to the database, executes a SQL query, and returns the results.

# this is the endpoint to get all patients
@router.get("/pacientes", response_model=List[PacienteResponse])
def get_pacientes():
    conn = get_mysql_connection() #get a connection to the database
    try:
        with conn.cursor() as cursor: #execute a SQL query to get all patients from the database
            cursor.execute("SELECT * FROM pacientes")
            return cursor.fetchall() # Returns data as JSON
    finally:
        conn.close() #close the database connection after the query is executed

# this is the endpoint to get all consultations
@router.get("/consultas", response_model=List[ConsultaResponse])
def get_consultas():
    conn = get_mysql_connection() 
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM consultas")
            return cursor.fetchall()
    finally:
        conn.close()

