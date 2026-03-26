import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PacientesComponent } from './pages/pacientes/pacientes';
import { authGuard } from './guards/auth-guard';

// definición de las rutas de la aplicación
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pacientes', component: PacientesComponent, canActivate: [authGuard] },
];