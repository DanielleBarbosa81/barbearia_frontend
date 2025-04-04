import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClienteComponent {
  cliente = {
    nome: '',
    email: '',
    telefone: '',
  };

  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private clienteService: ClienteService) {}

  onSubmit(): void {
    const clienteDto = {
      clienteNome: this.cliente.nome,
      clienteEmail: this.cliente.email,
      clienteTelefone: this.cliente.telefone,
    };

    // 1. Verificar se o cliente com o mesmo e-mail já existe
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        const clienteExistente = clientes.find(
          (c) => c.clienteEmail.toLowerCase() === clienteDto.clienteEmail.toLowerCase()
        );

        if (clienteExistente) {
          // 2. Se já existe, exibe alerta
          window.alert('Já existe um cliente cadastrado com este e-mail!');
          return;
        }

        // 3. Caso não exista, faz o cadastro normalmente
        this.clienteService.save(clienteDto).subscribe(
          (response) => {
            console.log('Cliente cadastrado com sucesso:', response);
            window.alert('Cliente cadastrado com sucesso!');

            this.erro = null;
            this.cliente = { nome: '', email: '', telefone: '' };

            setTimeout(() => {
              this.mensagem = null;
            }, 3000);
          },
          (error) => {
            console.error('Erro ao cadastrar cliente:', error);
            window.alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente.');
            this.mensagem = null;
          }
        );
      },
      (error) => {
        console.error('Erro ao verificar duplicidade:', error);
        window.alert('Erro ao verificar cliente existente.');
      }
    );
  }
}
