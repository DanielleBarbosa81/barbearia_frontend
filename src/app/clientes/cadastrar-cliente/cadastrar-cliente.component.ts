import { Component } from '@angular/core';
import { ClienteService } from '../../../app/services/cliente.service';

@Component({ selector: 'app-cadastrar-cliente', templateUrl: './cadastrar-cliente.component.html' })
export class CadastrarClienteComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  endereco: string = '';

  constructor(private clienteService: ClienteService) {}

  cadastrar() {
    const cliente = { nome: this.nome, email: this.email, telefone: this.telefone, endereco: this.endereco };
    this.clienteService.cadastrarCliente(cliente).subscribe(() => alert('Cliente cadastrado!'));
  }
}

