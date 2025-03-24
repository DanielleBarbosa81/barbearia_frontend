import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-barbeiros',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule],
  templateUrl: './listar-barbeiros.component.html',
  styleUrls: ['./listar-barbeiros.component.css']
})
export class ListarBarbeirosComponent {
  // Lista de barbeiros inicial (dados simulados)
  barbeiros: any [] = [];


  // Método para exibir a lista no console (exemplo básico)
  onSubmit() {
    console.log('Lista de barbeiros:', this.barbeiros);
  }
}
