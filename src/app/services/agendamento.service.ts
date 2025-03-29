import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {


  private apiUrl = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) {}


  salvarAgendamento(agendaDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agendamento`, agendaDto).pipe(
      catchError((error) => {
        console.error('Erro ao realizar o agendamento:', error);
        return throwError(() => error);
      })
    );
  }

 buscarDatasAgendadas(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/agendamentos`);
}

// Método para atualizar um agendamento
atualizarAgendamento(agendaId: number, agendaDto: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${agendaId}`, agendaDto);
}

// Método para excluir um agendamento do barbeiro
excluirAgendamentoDoBarbeiro(barbeiroId: number, dataHora: string): Observable<any> {
  let params = new HttpParams()
    .set('barbeiroId', barbeiroId.toString())
    .set('dataHora', dataHora);

  return this.http.delete(`${this.apiUrl}/agendamentos/barbeiro`, { params });
}

// Método para excluir um agendamento do cliente
excluirAgendamentoDoCliente(clienteId: number, dataHora: string): Observable<any> {
  let params = new HttpParams()
    .set('clienteId', clienteId.toString())
    .set('dataHora', dataHora);

  return this.http.delete(`${this.apiUrl}/agendamentos/cliente`, { params });
}
}



