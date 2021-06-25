import { Injectable } from '@angular/core';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  auth: any;
  constructor() {}
  init(): Promise<any> {
    this.auth = {};
    const config = {
      url: 'http://localhost:8080/auth/',
      // clientId: 'clientui',
      clientId: 'cordova',
      realm: 'realmauth',
      'ssl-required': 'none',
      'public-client': true,
      'use-resource-role-mappings': true,
      'enable-cors': true,
    };
    return new Promise((resolve, reject) => {
      this.auth = new Keycloak(config);
      this.auth
        .init({
          onLoad: 'login-required',
        })
        .then((res: any) => {
          resolve(true);
        })
        .catch((err: any) => {
          console.error('there is some error ,', { err });

          reject();
        });
    });
  }
  getToken(): string {
    return this.auth.token;
  }
}
