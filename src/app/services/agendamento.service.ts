import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
    private url = 'http://localhost:8080/agendamento';
    apiUrl: any;

  constructor(private http : HttpClient) { }

  listarAgendaeamentos(): Observable<any> {
    return this.http.get(this.url);
  }

  agendarHorario(agendamento : any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, agendamento);
  }

  excluirAgendamento(id : number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/excluir/${id}`);
  }
  buscarAgendamentoPorId(id : number): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar/${id}`);
  }
  atualizarAgendamento(id : number, value : any): Observable<any> {
    return this.http.put(`${this.apiUrl}/atualizar/${id}`, value);
  }
}
