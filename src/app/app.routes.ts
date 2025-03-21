import { Routes, RouterModule } from '@angular/router';
import { CadastrarBarbeiroComponent } from './barbeiros/cadastrar-barbeiros/cadastrar-barbeiros.component';
import { ListarBarbeirosComponent } from './barbeiros/listar-barbeiros/listar-barbeiros.component';
import { CadastrarClienteComponent } from './clientes/cadastrar-cliente/cadastrar-cliente.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { AgendarComponent } from './agendamentos/agendar/agendar.component';

export const routes: Routes = [
  { path: 'barbeiros/cadastrar', component: CadastrarBarbeiroComponent },
  { path: 'barbeiros/listar', component: ListarBarbeirosComponent },
  { path: 'clientes/cadastrar', component: CadastrarClienteComponent },
  { path: 'clientes/listar', component: ListarClientesComponent },
  { path: 'agendamentos/agendar', component: AgendarComponent },
  { path: '', redirectTo: '/clientes/listar', pathMatch: 'full' }
];

export const appRouting = RouterModule.forRoot(routes);

