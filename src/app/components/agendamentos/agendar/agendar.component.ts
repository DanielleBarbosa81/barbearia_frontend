import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../../services/agendamento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteDto } from '../../../services/cliente.service';
import { BarbeiroDto } from '../../../services/barbeiro.service';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  agendamento = {
    clienteId: null as number | null,
    barbeiroId: null as number | null,
    dataHora: ''
  };

  clientes: ClienteDto[] = [];
  barbeiros: BarbeiroDto[] = [];
  datasAgendadas: string[] = [];
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.loadClientes();
    this.loadBarbeiros();
    this.loadDatasAgendadas();
  }

  loadClientes(): void {
    this.agendamentoService.getClientes().subscribe(
      (data) => (this.clientes = data),
      (error) => console.error('Erro ao carregar clientes:', error)
    );
  }

  loadBarbeiros(): void {
    this.agendamentoService.getBarbeiros().subscribe(
      (data) => (this.barbeiros = data),
      (error) => console.error('Erro ao carregar barbeiros:', error)
    );
  }

  loadDatasAgendadas(): void {
    this.agendamentoService.buscarDatasAgendadas().subscribe(
      (data) => (this.datasAgendadas = data),
      (error) => console.error('Erro ao carregar datas agendadas:', error)
    );
  }

  // ✅ Método correto para salvar o agendamento
  salvarAgendamento(): void {
    if (this.agendamento.clienteId === null || this.agendamento.barbeiroId === null) {
      alert('Por favor, selecione um cliente e um barbeiro antes de salvar o agendamento.');
      return;
    }

    const agendaDto = {
      clienteId: this.agendamento.clienteId,
      barbeiroId: this.agendamento.barbeiroId,
      dataHora: this.agendamento.dataHora
    };

    this.agendamentoService.save(agendaDto).subscribe(
      () => {
        alert('Agendamento realizado com sucesso!');
        this.erro = null;
        this.agendamento = { clienteId: null, barbeiroId: null, dataHora: '' };
      },
      (error) => {
        console.error('Erro ao realizar agendamento:', error);
        alert('Ocorreu um erro ao realizar o agendamento. Tente novamente.');
      }
    );
  }
}
