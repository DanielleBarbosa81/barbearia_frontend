import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteDto } from '../../../models/cliente.dto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes: ClienteDto[] = [];
  clienteSelecionado: ClienteDto | null = null;
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
        this.erro = 'Erro ao carregar clientes!';
      }
    );
  }

  editarCliente(cliente: ClienteDto): void {
    this.clienteSelecionado = { ...cliente };
  }
  salvarEdicao(): void {
    if (this.clienteSelecionado && this.clienteSelecionado.clienteId !== undefined) {
      this.clienteService.update(this.clienteSelecionado.clienteId, this.clienteSelecionado).subscribe(
        () => {
          this.mensagem = 'Cliente atualizado com sucesso!';
          this.erro = null;
          window.alert('Cliente atualizado com sucesso!'); // <- ALERTA AO ATUALIZAR
          this.clienteSelecionado = null;
          this.carregarClientes();
        },
        (error) => {
          console.error('Erro ao atualizar cliente:', error);
          this.erro = 'Erro ao atualizar cliente!';
        }
      );
    } else {
      console.error('Erro: clienteId está indefinido.');
      this.erro = 'Erro ao atualizar cliente!';
    }
  }

  excluirCliente(clienteId: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.delete(clienteId).subscribe(
        () => {
          this.mensagem = 'Cliente excluído com sucesso!';
          this.erro = null;
          this.carregarClientes();
        },
        (error) => {
          console.error('Erro ao excluir cliente:', error);
          this.erro = 'Erro ao excluir cliente!';
        }
      );
    }
  }

  cancelarEdicao(): void {
    this.clienteSelecionado = null;
  }
}






