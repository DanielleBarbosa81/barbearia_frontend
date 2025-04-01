import { Component } from '@angular/core';
import { BarbeiroService } from '../../../services/barbeiro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-barbeiro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-barbeiros.component.html',
  styleUrls: ['./cadastrar-barbeiros.component.css']
})
export class CadastrarBarbeiroComponent {
  barbeiro = {
    barbeiroNome: '',
    barbeiroEspecialidade: ''

  }; // Objeto para armazenar os dados do formulário

  // Variáveis para exibir mensagens de sucesso ou erro
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private barbeiroService: BarbeiroService) {}

  // Método chamado ao submeter o formulário
  onSubmit(): void {
    const barbeiroDto = {
      barbeiroNome: this.barbeiro.barbeiroNome,
      barbeiroEspecialidade: this.barbeiro.barbeiroEspecialidade
    };

    this.barbeiroService.save(barbeiroDto).subscribe(
      (response) => {
        console.log(' Barbeiro cadastrado com sucesso:', response);

        // Define a mensagem de sucesso
        window.alert('Barbeiro cadastrado com sucesso!');

        this.erro = null; // Limpa qualquer mensagem de erro anterior

        // Limpa o formulário
        this.barbeiro = { barbeiroNome: '', barbeiroEspecialidade: '' };

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
}

