import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para usar ngModel em formulários

@Component({
  selector: 'app-cadastrar-clientes',
  standalone: true,  // Indica que o componente é standalone
  imports: [FormsModule],  // Importa o FormsModule para trabalhar com ngModel
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.css'
})
export class CadastrarClientesComponent {
  cliente = {
    nome: '',
    email: '',
    telefone: ''
  };

  onSubmit() {
    console.log('Cliente cadastrado:', this.cliente);
    // Lógica para salvar o cliente
  }

}
