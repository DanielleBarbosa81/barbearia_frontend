import { Component } from '@angular/core';
import { BarbeiroService } from '../../../app/services/barbeiro.service';

@Component({ selector: 'app-cadastrar-barbeiro', templateUrl: './cadastrar-barbeiros.component.html' })
export class CadastrarBarbeiroComponent {
  nome: string = '';
  especialidade: string = '';

  constructor(private barbeiroService: BarbeiroService) {}

  cadastrar() {
    const barbeiro = { nome: this.nome, especialidade: this.especialidade };
    this.barbeiroService.cadastrarBarbeiro(barbeiro).subscribe(() => alert('Barbeiro cadastrado!'));
  }
}
