import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemplo-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './exemplo-formulario.component.html',
  styleUrl: './exemplo-formulario.component.css'
})
export class ExemploFormularioComponent {

  formulario!: FormGroup // Armazena a instancia do formulario

  constructor(private readonly formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control(''), // Conecta ao campo nome no HTML
      dataNascimento: this.formBuilder.control('') // Conecta ao campo dataNascimento no HTML
    })
    // Construtor constrói o formulário ao inicializar o componente
  }

  enviarDados() {
    console.log(this.formulario.value);   // Ao clicar, loga os dados do formulário no console
  }
}
