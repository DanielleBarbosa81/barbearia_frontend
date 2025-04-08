import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { AgendaDto } from '../../../models/agenda.dto.component';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteDto } from '../../../models/cliente.dto.model';
import { BarbeiroService, BarbeiroDto } from '../../../services/barbeiro.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-agenda',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  providers: [AgendaService, ClienteService, BarbeiroService],
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css'],
})
export class ListarAgendaComponent implements OnInit {
  agendamentos: AgendaDto[] = [];
  agendamentoSelecionado: AgendaDto | null = null;
  clientes: ClienteDto[] = [];
  barbeiros: BarbeiroDto[] = [];
  mensagem: string | null = null;
  erro: string | null = null;
  editarForm!: FormGroup;

  constructor(
    private agendaService: AgendaService,
    private clienteService: ClienteService,
    private barbeiroService: BarbeiroService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Carregar agendamentos, clientes e barbeiros
    this.carregarAgendamentos();
    this.carregarClientes();
    this.carregarBarbeiros();

    // Inicializar formulário de edição
    this.editarForm = this.fb.group({
      clienteId: ['', Validators.required],
      barbeiroId: ['', Validators.required],
      dataHora: ['', Validators.required],
    });
  }

  carregarAgendamentos(): void {
    this.agendaService.findAll().subscribe({
      next: (data) => {
        console.log('Agendamentos carregados:', data);
        this.agendamentos = data;
      },
      error: (error) => {
        console.error('Erro ao carregar agendamentos', error);
        this.erro = 'Erro ao carregar agendamentos!';
      },
    });
  }

  carregarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        console.log('Clientes carregados:', data);
        this.clientes = data;
      },
      error: (error) => console.error('Erro ao carregar clientes', error),
    });
  }

  carregarBarbeiros(): void {
    this.barbeiroService.getBarbeiros().subscribe({
      next: (data) => {
        console.log('Barbeiros carregados:', data);
        this.barbeiros = data;
      },
      error: (error) => console.error('Erro ao carregar barbeiros', error),
    });
  }

  editarAgendamento(agenda: AgendaDto): void {
    this.agendamentoSelecionado = { ...agenda };

    // Formatar para input datetime-local
    const dataHoraFormatada = agenda.dataHora?.slice(0, 16); // "YYYY-MM-DDTHH:mm"

    this.editarForm.patchValue({
      clienteId: agenda.clienteId,
      barbeiroId: agenda.barbeiroId,
      dataHora: dataHoraFormatada,
    });
  }
  salvarEdicao(): void {
    if (this.editarForm.invalid || !this.agendamentoSelecionado) {
      alert('Formulário inválido ou agendamento não selecionado.');
      return;
    }

    const atualizado = {
      ...this.agendamentoSelecionado,
      ...this.editarForm.value,
    };

    this.agendaService.update(atualizado.agendaId!, atualizado).subscribe({
      next: () => {
        console.log('Agendamento atualizado com sucesso!');
        alert('Agendamento atualizado com sucesso!');
        this.agendamentoSelecionado = null;
        this.carregarAgendamentos();
      },
      error: (error) => {
        console.error('Erro ao atualizar agendamento:', error);
        alert('Erro ao atualizar agendamento.');
      },
    });
  }

  excluirAgendamento(agendaId: number): void {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      this.agendaService.delete(agendaId).subscribe({
        next: () => {
          console.log('Agendamento excluído com sucesso!');
          alert('Agendamento excluído com sucesso!');
          this.carregarAgendamentos();
        },
        error: (error) => {
          console.error('Erro ao excluir agendamento:', error);
          alert('Erro ao excluir agendamento.');
        },
      });
    }
  }

  cancelarEdicao(): void {
    this.agendamentoSelecionado = null;
    this.editarForm.reset();
  }
}


