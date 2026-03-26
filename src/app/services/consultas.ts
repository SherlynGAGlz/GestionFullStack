import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Consulta {
  id_consulta?: number;
  id_paciente: number;
  fecha_consulta: string;
  motivo: string;
  diagnostico: string;
  tratamiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private apiUrl = `${environment.apiUrl}/api/consultas`;

  constructor(private http: HttpClient) {}

  getConsultas(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.apiUrl);
  }

  getConsultasPorPaciente(idPaciente: number): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.apiUrl}/paciente/${idPaciente}`);
  }

  crearConsulta(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.apiUrl, consulta);
  }

  eliminarConsulta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}