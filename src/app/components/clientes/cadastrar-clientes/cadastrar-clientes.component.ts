import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service'; // Importe o seu serviço
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClienteComponent {
  cliente = {
    nome: '',
    email: '',
    telefone: '',
  }; // Objeto para armazenar os dados do formulário

  // Variáveis para exibir mensagens de sucesso ou erro
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private clienteService: ClienteService) {}

  // Método chamado ao submeter o formulário
  onSubmit(): void {
    const clienteDto = {
      clienteNome: this.cliente.nome,
      clienteEmail: this.cliente.email,
      clienteTelefone: this.cliente.telefone,
    };

    this.clienteService.save(clienteDto).subscribe(
      (response) => {
        console.log('Cliente cadastrado com sucesso:', response);

        // Define a mensagem de sucesso
        window.alert('Cliente cadastrado com sucesso!');

        this.erro = null; // Limpa qualquer mensagem de erro anterior

        // Limpa o formulário
        this.cliente = { nome: '', email: '', telefone: '' };

        // Remove a mensagem de sucesso após 3 segundos
        setTimeout(() => {
          this.mensagem = null;
        }, 3000);
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);

        // Define a mensagem de erro
        window.alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente.');

        this.mensagem = null; // Limpa a mensagem de sucesso, caso exista
      }
    );
  }
}

