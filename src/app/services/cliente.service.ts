import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get(`${this.baseUrl}/listar`).pipe(
      catchError((error) => {
        console.error('Erro ao listar clientes:', error);
        throw error; // Propaga o erro para o componente
      })
    );
  }

  /**
   * Cadastra um novo cliente no banco de dados.
   * @param cliente Objeto com os dados do cliente.
   * @returns Observable com o resultado da operação.
   */
  cadastrarCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/cadastrar`, cliente).pipe(
      catchError((error) => {
        console.error('Erro ao cadastrar cliente:', error);
        throw error;
      })
    );
  }

  /**
   * Exclui um cliente do banco de dados pelo ID.
   * @param id ID do cliente.
   * @returns Observable com o resultado da operação.
   */
  excluirCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao excluir cliente:', error);
        throw error;
      })
    );
  }

  /**
   * Atualiza os dados de um cliente existente no banco de dados.
   * @param id ID do cliente.
   * @param value Dados atualizados do cliente.
   * @returns Observable com o resultado da operação.
   */
  atualizarCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/atualizar/${id}`, value).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar cliente:', error);
        throw error;
      })
    );
  }

  /**
   * Busca um cliente pelo ID no banco de dados.
   * @param id ID do cliente.
   * @returns Observable com os dados do cliente.
   */
  buscarClientePorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscar/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao buscar cliente por ID:', error);
        throw error;
      })
    );
  }
}
