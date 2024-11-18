import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginService } from './autenticacao/login/services/login.service';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),LoginService, importProvidersFrom(HttpClientModule), provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
