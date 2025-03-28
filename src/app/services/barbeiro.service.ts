import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarbeiroService {
  private baseUrl = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) { }
  cadastrarBarbeiro(barbeiroDto: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/cadastrarBarbeiro`, barbeiroDto).pipe(
          catchError((error) => {
            console.error('Erro ao cadastrar barbeiro:', error);
            return throwError(() => error); // Retorna o erro para o componente
          })
        );

  }
  listarBarbeiros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listarBarbeiros`).pipe(
      catchError((error) => {
        console.error('Erro ao listar barbeiros:', error);
        return throwError(() => error);
      })
    );
  }
}
