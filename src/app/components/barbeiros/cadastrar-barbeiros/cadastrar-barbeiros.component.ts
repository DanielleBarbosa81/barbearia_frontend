import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para usar ngModel em formulários

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

  onSubmit() {
    console.log('Barbeiro cadastrado:', this.barbeiro);
    // Lógica para salvar o barbeiro
  }
}

