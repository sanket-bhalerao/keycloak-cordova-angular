import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var window: any;
if (environment.production) {
  enableProdMode();
}

function boot() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    boot();
  });
} else {
  boot();
}
