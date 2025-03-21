import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarbeiroService {
  private baseUrl = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) { }

  listarBarbeiros(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }
  cadastrarBarbeiro(barbeiro: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/cadastrar`, barbeiro);
  }
}
