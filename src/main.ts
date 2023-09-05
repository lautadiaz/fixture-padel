import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

// Rutas principales de la aplicacion
// Despues ver como funcionan las rutas hijas
import { routes } from './app/routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule, BrowserAnimationsModule), provideAnimations(), provideHttpClient()]})
  .catch(err => console.error(err));
