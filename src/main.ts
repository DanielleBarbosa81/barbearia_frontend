import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ClienteFormComponent } from './app/clientes/form-cliente/form-cliente.component';

bootstrapApplication(ClienteFormComponent)
  .catch(err => console.error(err));

