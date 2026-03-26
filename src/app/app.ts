import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// es para el componente raíz de la aplicación
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestiones-pacientes');
}
