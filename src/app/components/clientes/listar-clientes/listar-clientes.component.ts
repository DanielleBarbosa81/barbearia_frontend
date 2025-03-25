import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes: any[] = []; // Armazena a lista de clientes

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Chama o serviço para obter a lista de clientes
    this.clienteService.listarClientes().subscribe(
      (data) => {
        this.clientes = data; // Atribui a lista de clientes retornada pelo backend
        console.log('Clientes carregados:', this.clientes); // Log para debug
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }
}
