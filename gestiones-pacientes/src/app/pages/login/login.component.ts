import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  async loginConGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/pacientes']);
    } catch (error: any) {
      this.error = 'Error al iniciar sesión. Intenta de nuevo.';
      console.error(error);
    }
  }
}