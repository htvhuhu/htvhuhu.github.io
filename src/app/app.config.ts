import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled', // Enable anchor scrolling
      scrollPositionRestoration: 'enabled', // Restore scroll position on navigation
    })),
    provideClientHydration(),
    provideAnimations()
  ]
};
