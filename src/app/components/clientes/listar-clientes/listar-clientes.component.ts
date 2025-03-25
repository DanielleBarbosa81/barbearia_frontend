import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Chama o serviço para obter a lista de clientes
    this.clienteService.listarClientes().subscribe(
      (data) => {
        this.clientes = data; // Atribui a lista de clientes
        console.log('Clientes carregados:', this.clientes); // Verifique no console se os dados estão chegando
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }

  
}
