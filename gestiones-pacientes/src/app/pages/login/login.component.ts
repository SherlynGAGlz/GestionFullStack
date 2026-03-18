import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

// componente para manejar la pantalla de login, donde los usuarios pueden iniciar sesión
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  constructor(private auth: Auth, private router: Router) {}

  async loginConGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/pacientes']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}