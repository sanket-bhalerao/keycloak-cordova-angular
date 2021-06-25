import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakService } from '../services/keycloak.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.keycloakService.getToken();
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token.toString()}`),
    });
    return next.handle(request);
  }
}
