import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service'; // Importe o seu serviço
import { Router } from '@angular/router'; // Para redirecionar após o cadastro
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  clienteDto = { // Objeto para armazenar os dados do cliente
    nome: '',
    email: '',
    telefone: ''
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  // Método que será chamado ao submeter o formulário
  onSubmit(): void {
    console.log('Formulário enviado:', this.clienteDto);
    // Chama o serviço para cadastrar o cliente
    this.clienteService.cadastrarCliente(this.clienteDto).subscribe(
      (data) => {
        console.log('Cliente cadastrado com sucesso:', data);
        this.router.navigate(['/clientes']); // Redireciona após o cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
        alert('Erro ao cadastrar cliente');
      }
    );
  }
}



