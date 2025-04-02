import { Routes } from '@angular/router';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { CadastrarBarbeiroComponent } from './components/barbeiros/cadastrar-barbeiros/cadastrar-barbeiros.component';
import { ListarBarbeirosComponent } from './components/barbeiros/listar-barbeiros/listar-barbeiros.component';
import { AgendaComponent } from './components/agendamentos/agenda/agenda.component';
import { ListarAgendamentosComponent } from './components/agendamentos/listar-agendamentos/listar-agendamentos.component';

export const routes: Routes = [
  { path: 'clientes/cadastrar', component: CadastrarClienteComponent },
  { path: 'clientes/listar', component: ListarClientesComponent },
  { path: 'barbeiros/cadastrar', component: CadastrarBarbeiroComponent },
  { path: 'barbeiros/listar', component: ListarBarbeirosComponent },
  { path: 'agendamentos/agendar', component: AgendaComponent },
  { path: 'agendamentos/listar', component: ListarAgendamentosComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

import { RouterModule } from '@angular/router';

export const appRouting = RouterModule.forRoot(routes);


