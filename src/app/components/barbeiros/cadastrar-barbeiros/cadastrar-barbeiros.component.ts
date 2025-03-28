import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para usar ngModel em formulários
import { CommonModule } from '@angular/common'; // Para usar diretivas comuns do Angular
import { ClienteService } from '../../../services/cliente.service';
import { BarbeiroService } from '../../../services/barbeiro.service';

@Component({
  selector: 'app-cadastrar-barbeiro',
  standalone: true,  // Indica que o componente é standalone
  imports: [FormsModule],  // Importa o FormsModule para trabalhar com ngModel
  templateUrl: './cadastrar-barbeiros.component.html',
  styleUrls: ['./cadastrar-barbeiros.component.css']
})
export class CadastrarBarbeiroComponent {
  barbeiro = {
    nome: '',
    especialidade: ''
  };

  // Variáveis para exibir mensagens de sucesso ou erro
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private barbeiroService : BarbeiroService) {}

  // Método chamado ao submeter o formulário
  onSubmit(): void {
    this.barbeiroService.cadastrarBarbeiro(this.barbeiro).subscribe(
      (response) => {
        console.log('Barbeiro cadastrado com sucesso:', response);

        // Define a mensagem de sucesso
        window.alert('Barbeiro cadastrado com sucesso!');

        this.erro = null; // Limpa qualquer mensagem de erro anterior

        // Limpa o formulário
        this.barbeiro = { nome: '', especialidade: '' };

        // Remove a mensagem de sucesso após 3 segundos
        setTimeout(() => {
          this.mensagem = null;
        }, 3000);
        },
      (error) => {
        console.error('Erro ao cadastrar barbeiro:', error);
        // Define a mensagem de erro
        window.alert('Ocorreu um erro ao cadastrar o barbeiro. Tente novamente.');
        this.mensagem = null; // Limpa a mensagem de sucesso, caso exista
        }
       );
      }
  // Método para listar barbeiros

}

