import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true, // Define este componente como standalone
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
  imports: [FormsModule] // Importa o FormsModule diretamente no componente
})
export class ClienteFormComponent {
  cliente = {
    nome: '',
    telefone: '',
    email: ''
  };

  onSubmit() {
    console.log('Dados do cliente:', this.cliente);
    alert('Cliente cadastrado com sucesso!');
    this.resetForm();
  }

  resetForm() {
    this.cliente = {
      nome: '',
      telefone: '',
      email: ''
    };
  }
}
