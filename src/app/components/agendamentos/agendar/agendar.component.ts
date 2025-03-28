import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { BarbeiroService } from '../../../services/barbeiro.service';
import { AgendamentoService } from '../../../services/agendamento.service'; // Serviço para agendamento

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [FormsModule],
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

  constructor(
    private clienteService: ClienteService,
    private barbeiroService: BarbeiroService,
    private agendamentoService: AgendamentoService // Serviço para agendamento
  ) {}

  ngOnInit(): void {
    // Carregar a lista de clientes e barbeiros ao inicializar o componente
    this.clienteService.listarClientes().subscribe(data => {
      this.clientes = data;
    });

    this.barbeiroService.listarBarbeiros().subscribe(data => {
      this.barbeiros = data;
    });
  }

  onSubmit(): void {
    // Enviar o agendamento para o backend
    this.agendamentoService.agendar(this.agendamento).subscribe(
      response => {
        console.log('Agendamento realizado com sucesso:', response);
        alert('Agendamento realizado com sucesso!');
      },
      error => {
        console.error('Erro ao agendar atendimento:', error);
        alert('Erro ao realizar o agendamento.');
      }
    );
  }
}
