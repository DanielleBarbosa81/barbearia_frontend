import { Component } from '@angular/core';
import { AgendamentoService } from '../../../app/services/agendamento.service';

@Component({ selector: 'app-agendar', templateUrl: './agendar.component.html' })
export class AgendarComponent {
  clienteId: number = 0;
  barbeiroId: number = 0;
  dataHora: string = '';

  constructor(private agendamentoService: AgendamentoService) {}

  agendar() {
    const agendamento = { clienteId: this.clienteId, barbeiroId: this.barbeiroId, dataHora: this.dataHora };
    this.agendamentoService.agendarHorario(agendamento).subscribe(() => alert('Agendamento realizado!'));
  }
}
