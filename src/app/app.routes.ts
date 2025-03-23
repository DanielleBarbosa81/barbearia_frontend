import { Routes, RouterModule } from '@angular/router';
import { CadastrarBarbeiroComponent } from './components/barbeiros/cadastrar-barbeiros/cadastrar-barbeiros.component';
import { ListarBarbeirosComponent } from './components/barbeiros/listar-barbeiros/listar-barbeiros.component';
import{ CadastrarClientesComponent } from './components/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { AgendarComponent } from './components/agendamentos/agendar/agendar.component';

export const routes: Routes = [
  { path: 'barbeiros/cadastrar', component: CadastrarBarbeiroComponent },
  { path: 'barbeiros/listar', component: ListarBarbeirosComponent },
  { path: 'clientes/cadastrar', component: CadastrarClientesComponent },
  { path: 'agendamentos/agendar', component: AgendarComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

export const appRouting = RouterModule.forRoot(routes);


