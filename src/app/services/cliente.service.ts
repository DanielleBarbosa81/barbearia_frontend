import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ClienteDto {
  clienteId?: number;
  clienteNome: string;
  clienteTelefone?: string;
  clienteEmail?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  findById(clienteId: number): Observable<ClienteDto> {
    return this.http.get<ClienteDto>(`${this.baseUrl}/${clienteId}`);
  }

  findAll(): Observable<ClienteDto[]> {
    return this.http.get<ClienteDto[]>(`${this.baseUrl}/listarClientes`);
  }

  save(cliente: ClienteDto): Observable<ClienteDto> {
    return this.http.post<ClienteDto>(this.baseUrl, cliente);
  }

  update(clienteId: number, cliente: ClienteDto): Observable<ClienteDto> {
    return this.http.put<ClienteDto>(`${this.baseUrl}/${clienteId}`, cliente);
  }

  delete(clienteId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${clienteId}`);
  }
}
