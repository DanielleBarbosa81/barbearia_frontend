import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { BarbeiroService } from '../../../services/barbeiro.service';
import { AgendamentoService } from '../../../services/agendamento.service';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  agendamento = {
    cliente: '',
    data: '',
    horario: '',
    barbeiro: ''
  };

  clientes: any[] = [];
  barbeiros: any[] = [];
  mensagem: string | null = null;

  constructor(
    private agendamentoService: AgendamentoService,
    private clienteService: ClienteService,
    private barbeiroService: BarbeiroService
  ) {}

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(data => {
      this.clientes = data;
    });

    this.barbeiroService.listarBarbeiros().subscribe(data => {
      this.barbeiros = data;
    });
  }

  salvarAgendamento(): void {
    if (this.agendamento.cliente && this.agendamento.barbeiro && this.agendamento.data && this.agendamento.horario) {
      const dataHora = `${this.agendamento.data}T${this.agendamento.horario}`;

      const novoAgendamento = {
        barbeiro: this.agendamento.barbeiro,
        cliente: this.agendamento.cliente,
        dataHora: dataHora
      };

      this.agendamentoService.salvarAgendamento(novoAgendamento).subscribe(
        () => {
          this.mensagem = 'Agendamento realizado com sucesso!';
          this.resetarFormulario();
        },
        (error) => {
          console.error('Erro ao salvar agendamento:', error);
          this.mensagem = 'Erro ao salvar o agendamento. Tente novamente.';
        }
      );
    } else {
      this.mensagem = 'Preencha todos os campos antes de salvar o agendamento.';
    }
  }

  resetarFormulario(): void {
    this.agendamento = {
      cliente: '',
      data: '',
      horario: '',
      barbeiro: ''
    };
    this.mensagem = null;
  }
}
