import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
    private url = 'http://localhost:3000/agendamento';
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
}
