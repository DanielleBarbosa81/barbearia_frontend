import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AgendaDto {
  agendaId?: number;
  clienteId: number;
  barbeiroId: number;
  dataHora: string;
}

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private baseUrl = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) {}

  save(agenda: AgendaDto): Observable<AgendaDto> {
    return this.http.post<AgendaDto>(`${this.baseUrl}`, agenda);
  }

  findAll(): Observable<AgendaDto[]> {
    return this.http.get<AgendaDto[]>(`${this.baseUrl}/listarAgendamentos`);
  }


  atualizarAgenda(agendaId: number, agenda: AgendaDto): Observable<AgendaDto> {
    return this.http.put<AgendaDto>(`${this.baseUrl}/${agendaId}`, agenda);
  }

  excluirAgendamentoDoBarbeiro(barbeiroId: number, dataHora: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/barbeiro`, {
      params: { barbeiroId: barbeiroId.toString(), dataHora }
    });
  }

  excluirAgendamentoDoCliente(clienteId: number, dataHora: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/cliente`, {
      params: { clienteId: clienteId.toString(), dataHora }
    });
  }
  // Método para pegar os clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/clientes/listarClientes');
  }
  // Método para pegar os barbeiros
  getBarbeiros(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/barbeiros/listarBarbeiros');
  }

  // Método para pegar as datas agendadas
  buscarDatasAgendadas(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/agenda/agendamentos');
  }
}

