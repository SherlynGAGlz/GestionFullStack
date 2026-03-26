import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Se activa el modo de producción si el entorno es de producción
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
