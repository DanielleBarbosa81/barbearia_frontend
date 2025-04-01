import { Component, OnInit } from '@angular/core';
import { ClienteDto, ClienteService } from '../../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes:  ClienteDto[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(
      (data) => {
        this.clientes = data; // Atribui os dados retornados pelo backend
        console.log('Clientes carregados:', this.clientes); // Log para verificar os dados recebidos
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }



}
