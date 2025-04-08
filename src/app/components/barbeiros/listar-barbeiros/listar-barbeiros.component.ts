import { Component, OnInit } from '@angular/core';
import { BarbeiroService } from '../../../services/barbeiro.service';
import { BarbeiroDto } from '../../../models/barbeiro.dto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-barbeiros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-barbeiros.component.html',
  styleUrls: ['./listar-barbeiros.component.css'],
})
export class ListarBarbeirosComponent implements OnInit {
  barbeiros: BarbeiroDto[] = [];
  barbeiroSelecionado: BarbeiroDto | null = null;
  mensagem: string | null = null;
  erro: string | null = null;

  constructor(private barbeiroService: BarbeiroService) {}

  ngOnInit(): void {
    this.carregarBarbeiros();
  }

  carregarBarbeiros(): void {
    this.barbeiroService.getBarbeiros().subscribe(
      (barbeiros) => {
        // Garante que barbeiroEspecialidade tenha um valor padrão caso esteja indefinida
        this.barbeiros = barbeiros.map((barbeiro) => ({
          ...barbeiro,
          barbeiroEspecialidade: barbeiro.barbeiroEspecialidade || 'Não especificado', // Valor padrão
        }));
      },
      (error) => {
        console.error('Erro ao carregar barbeiros:', error);
        this.erro = 'Erro ao carregar barbeiros!';
      }
    );
  }

  editarBarbeiro(barbeiro: BarbeiroDto): void {
    this.barbeiroSelecionado = { ...barbeiro };
  }

  salvarEdicao(): void {
    if (this.barbeiroSelecionado && this.barbeiroSelecionado.barbeiroId !== undefined) {
      this.barbeiroService.update(this.barbeiroSelecionado.barbeiroId, this.barbeiroSelecionado).subscribe(
        () => {
          this.mensagem = 'Barbeiro atualizado com sucesso!';
          this.erro = null;
          window.alert('Barbeiro atualizado com sucesso!'); // <- ALERTA AO ATUALIZAR
          this.barbeiroSelecionado = null;
          this.carregarBarbeiros();
        },
        (error) => {
          console.error('Erro ao atualizar barbeiro:', error);
          this.erro = 'Erro ao atualizar barbeiro!';
        }
      );
    } else {
      console.error('Erro: barbeiroId está indefinido.');
      this.erro = 'Erro ao atualizar barbeiro!';
    }
  }

  excluirBarbeiro(barbeiroId: number): void {
    if (confirm('Tem certeza que deseja excluir este barbeiro?')) {
      const dataHoraAtual = new Date().toISOString(); // Pega a data atual no formato ISO

      this.barbeiroService.delete(barbeiroId, dataHoraAtual).subscribe(
        () => {
        window.alert('Barbeiro excluído com sucesso!'); // <- ALERTA AO EXCLUIR
          this.erro = null;
          this.carregarBarbeiros();
        },
        (error) => {
          const mensagemErroBackend =
            error?.error?.message ||
            'Erro ao excluir barbeiro. Pode haver agendamentos pendentes.';
          this.erro = mensagemErroBackend;
          window.alert(mensagemErroBackend);
        }
      );
    }
  }


  cancelarEdicao(): void {
    this.barbeiroSelecionado = null;
  }
}
