import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/clientes'; // URL base para chamadas HTTP

  constructor(private http: HttpClient) {}

  /**
   * Lista os clientes cadastrados no banco de dados.
   * @returns Observable com a lista de clientes.
   */
  listarClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listarClientes`).pipe(
      catchError((error) => {
        console.error('Erro ao listar clientes:', error);
        return throwError(error); // Propaga o erro para o componente
      })
    );
  }

  /**
   * Cadastra um novo cliente no banco de dados.
   * @param clienteDto Objeto com os dados do cliente.
   * @returns Observable com o resultado da operação.
   */
  cadastrarCliente(clienteDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cadastrarCliente`, clienteDto).pipe(
      catchError((error) => {
        console.error('Erro ao cadastrar cliente:', error);
        return throwError(error); // Retorna o erro para o componente
      })
    );
  }
}