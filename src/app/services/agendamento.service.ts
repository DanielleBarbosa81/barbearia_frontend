import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost:8080/agendamentos'; 
  constructor(private http: HttpClient) {}

  agendar(agendamento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, agendamento);
  }
}
