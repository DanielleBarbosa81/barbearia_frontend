import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para diretivas como *ngIf e *ngFor

@Component({
  selector: 'app-listar-agendamentos',
  standalone: true, // Marca o componente como standalone
  imports: [CommonModule], // Importa o CommonModule para suporte ao *ngIf e *ngFor
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css']
})
export class ListarAgendamentosComponent {
  // Lista de agendamentos simulados
  agendamentos: any [] = [ ];
}

