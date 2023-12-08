import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { environment } from 'src/environments/environment';
import { ViewsModule } from './views/views.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER } from '@angular/core';
import { initializeKeycloak } from './common/app.init';


// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8080',
//         realm: 'demo-realm',
//         clientId: 'demo-client-local'
//       },
//       // initOptions: {
//       //   onLoad: 'check-sso',
//       //   checkLoginIframe: false,
//       //   silentCheckSsoRedirectUri:
//       //     window.location.origin + '/assets/silent-check-sso.html'
//       // }
//       initOptions: {
//         onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
//         flow: "standard"    ,      // allowed values 'standard', 'implicit', 'hybrid';
//         checkLoginIframe: false
//       },

//       // bearerExcludedUrls: ['/','/home'],
//       // bearerPrefix: 'Bearer',
//       // enableBearerInterceptor: true,
//     });
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ViewsModule,
    KeycloakAngularModule,
    ...environment.modules
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService]
      }
  ],
  bootstrap: [AppComponent],
  exports: [ ...environment.modules],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
