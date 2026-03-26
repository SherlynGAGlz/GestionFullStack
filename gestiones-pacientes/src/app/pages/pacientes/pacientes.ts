import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, signOut, User } from '@angular/fire/auth';
import { authState } from '@angular/fire/auth';
import { PacientesService, Paciente } from '../../services/pacientes';
import { ConsultasService, Consulta } from '../../services/consultas';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class PacientesComponent implements OnInit {
  usuario: User | null = null;
  vistaActiva = 'inicio';

  // Pacientes
  pacientes: Paciente[] = [];
  pacientesFiltrados: Paciente[] = [];
  pacienteSeleccionado: Paciente | null = null;
  cargandoPacientes = false;
  busqueda = '';

  // Consultas del paciente seleccionado
  consultas: Consulta[] = [];
  cargandoConsultas = false;

  constructor(
    private pacientesService: PacientesService,
    private consultasService: ConsultasService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    authState(this.auth).subscribe((user: User | null) => {
      this.usuario = user;
    });
  }

  irA(vista: string): void {
    this.vistaActiva = vista;
    this.pacienteSeleccionado = null;
    if (vista === 'pacientes') this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.cargandoPacientes = true;
    this.pacientesService.getPacientes().subscribe({
      next: (data: Paciente[]) => {
        this.pacientes = data;
        this.pacientesFiltrados = data;
        this.cargandoPacientes = false;
      },
      error: (err: any) => {
        console.error(err);
        this.cargandoPacientes = false;
      }
    });
  }

  filtrarPacientes(): void {
    const q = this.busqueda.toLowerCase();
    this.pacientesFiltrados = this.pacientes.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.apellido.toLowerCase().includes(q) ||
      p.correo.toLowerCase().includes(q)
    );
  }

  verPaciente(paciente: Paciente): void {
    this.pacienteSeleccionado = paciente;
    this.cargarConsultasPaciente(paciente.id_paciente!);
  }

  cargarConsultasPaciente(idPaciente: number): void {
    this.cargandoConsultas = true;
    this.consultasService.getConsultas().subscribe({
      next: (data: Consulta[]) => {
        this.consultas = data.filter(c => c.id_paciente === idPaciente);
        this.cargandoConsultas = false;
      },
      error: (err: any) => {
        console.error(err);
        this.cargandoConsultas = false;
      }
    });
  }

  volverALista(): void {
    this.pacienteSeleccionado = null;
    this.consultas = [];
  }

  iniciales(nombre: string, apellido: string): string {
    return (nombre?.[0] || '') + (apellido?.[0] || '');
  }

  async cerrarSesion(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}