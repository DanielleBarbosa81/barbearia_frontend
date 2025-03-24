import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-clientes',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule],
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {
  // Inicializamos a lista como vazia
  clientes: any[] = [];

  // Método para exibir a lista no console (exemplo básico)
  onSubmit() {
    console.log('Lista de clientes:', this.clientes);
  }
}
