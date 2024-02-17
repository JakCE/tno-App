import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from "@angular/common/http";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';
import { TokenInterceptorService } from "./services/tokenInterceptor/token-interceptor.service";
import { TokenInterceptor } from "./services/tokenInterceptor/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    tuiNotificationOptionsProvider({
      icon: 'tuiIconHelpCircle',
      status: 'warning',
    }),
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(TuiRootModule),
    provideHttpClient(),
    JwtHelperService
  ]
};
