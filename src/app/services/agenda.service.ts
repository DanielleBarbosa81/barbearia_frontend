

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendaDto } from  '../models/agenda.dto.component'; // Supondo que você tenha criado essa classe em TypeScript

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  getAgendamentos() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/agendas'; // Altere conforme a URL da sua API

  constructor(private http: HttpClient) {}

  // Função para salvar o agendamento
  saveAgenda(agendaDto: AgendaDto): Observable<AgendaDto> {
    return this.http.post<AgendaDto>(this.apiUrl, agendaDto);
  }

  // Função para buscar o cliente e barbeiro pelo nome
  searchClienteByNome(clienteNome: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/clientes/search?nome=${clienteNome}`);
  }

  searchBarbeiroByNome(barbeiroNome: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/barbeiros/search?nome=${barbeiroNome}`);
  }

  update(agendaId: number, agendaDto: AgendaDto): Observable<AgendaDto> {
    return this.http.put<AgendaDto>(`${this.apiUrl}/${agendaId}`, agendaDto);
  }
  findAll(): Observable<AgendaDto[]> {
    return this.http.get<AgendaDto[]>(`${this.apiUrl}/listarAgendas`);
  }
  findById(agendaId: number): Observable<AgendaDto> {
    return this.http.get<AgendaDto>(`${this.apiUrl}/${agendaId}`);
  }
  delete(agendaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${agendaId}`);
  }

}
