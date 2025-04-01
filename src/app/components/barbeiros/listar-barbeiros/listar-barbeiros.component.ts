import { Component, OnInit } from '@angular/core';
import { BarbeiroService } from '../../../services/barbeiro.service';  // Serviço responsável por buscar dados dos barbeiros
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-barbeiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-barbeiros.component.html',
  styleUrls: ['./listar-barbeiros.component.css'],
})
export class ListarBarbeirosComponent implements OnInit {
  barbeiros: any[] = [];  // Lista de barbeiros

  constructor(private barbeiroService: BarbeiroService) {}

  ngOnInit(): void {
    this.barbeiroService.findAll().subscribe(
      (data) => {
        console.log('Resposta do backend:', data);  // Verifique a resposta
        this.barbeiros = data;  // Atribui os dados recebidos ao array de barbeiros
        console.log('Barbeiros carregados:', this.barbeiros);  // Log para verificar os barbeiros
      },
      (error) => {
        console.error('Erro ao carregar barbeiros:', error);  // Exibe erro, caso haja algum
      }
    );
  }
}




