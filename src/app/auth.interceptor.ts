import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private  keycloakService: KeycloakService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor ' );
    const bearerToken =  this.keycloakService.getToken();
    this.keycloakService.getToken().then(function(value) {
      console.log('token ' + value);
   }, function(error) {
      // This is called when error occurs.
      console.log('error in fetching token ');
   }
)

    if (!request.headers.has('Authorization')) {
      request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${bearerToken}`)
        });
    }

    return next.handle(request);
  }
}
