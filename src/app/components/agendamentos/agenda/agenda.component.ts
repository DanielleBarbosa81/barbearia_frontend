import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { AgendaDto } from '../../../models/agenda.dto.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteDto, ClienteService } from '../../../services/cliente.service';
import { BarbeiroDto, BarbeiroService } from '../../../services/barbeiro.service';

@Component({
  selector: 'app-agenda',
  standalone: true,  // Componente standalone, caso esteja utilizando
  imports: [CommonModule, ReactiveFormsModule],  // Importando módulos necessários para formulário reativo
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  agendamentoForm!: FormGroup;
  clientes: ClienteDto[] = [];
  barbeiros: BarbeiroDto[] = [];

  constructor(
    private fb: FormBuilder,
    private agendaService: AgendaService,
    private clienteService: ClienteService,
    private barbeiroService: BarbeiroService
  ) {}

  ngOnInit() {
    // Inicializando o formulário reativo
    this.agendamentoForm = this.fb.group({
      clienteId: ['', Validators.required],
      barbeiroId: ['', Validators.required],
      dataHora: ['', Validators.required]
    });

    // Carregar clientes
    this.carregarClientes();

    // Carregar barbeiros
    this.carregarBarbeiros();
  }

  get formControls() {
    return this.agendamentoForm.controls;
  }

  carregarClientes() {
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        console.log('Clientes carregados:', data);
        this.clientes = data;
      },
      error: (error) => console.error('Erro ao carregar clientes', error)
    });
  }

  carregarBarbeiros() {
    this.barbeiroService.getBarbeiros().subscribe({
      next: (data) => {
        console.log('Barbeiros carregados:', data);
        this.barbeiros = data;
      },
      error: (error) => console.error('Erro ao carregar barbeiros', error)
    });
  }

  onSubmit() {
    if (this.agendamentoForm.invalid) {
      console.log('Formulário inválido:', this.agendamentoForm.value);
      alert('Preencha todos os campos corretamente.');
      return;
    }

    // Obter os valores dos IDs, e garantir que sejam do tipo número
    const clienteId = +this.agendamentoForm.value.clienteId; // Convertendo para número
    const barbeiroId = +this.agendamentoForm.value.barbeiroId; // Convertendo para número

    console.log('ID do Cliente selecionado:', clienteId);
    console.log('ID do Barbeiro selecionado:', barbeiroId);

    // Buscar o cliente e barbeiro pelas listas carregadas
    const cliente = this.clientes.find(c => c.clienteId === clienteId);
    const barbeiro = this.barbeiros.find(b => b.barbeiroId === barbeiroId);

    console.log('Cliente encontrado:', cliente);
    console.log('Barbeiro encontrado:', barbeiro);

    // Verificar se o cliente ou barbeiro foram encontrados
    if (!cliente || !barbeiro) {
      console.error('Cliente ou Barbeiro não encontrados');
      alert('Cliente ou Barbeiro não encontrados.');
      return;
    }

    // Montando o objeto de agendamento
    const agendamento = {
      clienteId: cliente.clienteId,
      clienteNome: cliente.clienteNome,  // Garante que o nome está indo
      barbeiroId: barbeiro.barbeiroId,
      barbeiroNome: barbeiro.barbeiroNome,  // Garante que o nome está indo
      dataHora: this.agendamentoForm.value.dataHora
    };

    console.log('📤 Enviando agendamento:', JSON.stringify(agendamento));

    // Chamar o serviço para salvar o agendamento
    this.agendaService.saveAgenda(agendamento).subscribe({
      next: (response) => {
        console.log('✅ Agendamento realizado com sucesso!', response);
        alert('Agendamento realizado com sucesso!');
      },
      error: (error) => {
        console.error('❌ Erro ao realizar agendamento:', error);
        alert(`Erro: ${error?.error?.message}`);
      }
    });
  }
}
