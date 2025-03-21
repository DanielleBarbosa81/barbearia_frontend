import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ClienteModelForm } from '../clientes.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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
