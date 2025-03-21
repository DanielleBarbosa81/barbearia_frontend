import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/clientes';
  apiUrl: any;
  constructor(private http: HttpClient) { }

  listarClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar`);
  }

  cadastrarCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/cadastrar`, cliente);
  }
}
