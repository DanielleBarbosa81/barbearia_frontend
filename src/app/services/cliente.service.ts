import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ClienteDto } from '../models/cliente.dto.model';

export interface LocalClienteDto {
  clienteId?: number;
  clienteNome: string;
  clienteTelefone?: string;
  clienteEmail?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  getAll() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<ClienteDto[]> {
    return this.http.get<ClienteDto[]>(`${this.baseUrl}/listarClientes`);
  }


  apiUrl<T>(apiUrl: any): Observable<any[]> {
    throw new Error('Method not implemented.');
  }

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
