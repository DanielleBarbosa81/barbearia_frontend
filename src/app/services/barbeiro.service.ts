import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BarbeiroDto {
  barbeiroId?: number;
  barbeiroNome: string;
  barbeiroEspecialidade?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BarbeiroService {
  create(barbeiroSelecionado: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) {}
  

  getBarbeiros(): Observable<BarbeiroDto[]> {
    return this.http.get<BarbeiroDto[]>(`${this.baseUrl}/listarBarbeiros`); // Ajuste aqui
  }


  findById(barbeiroId: number): Observable<BarbeiroDto> {
    return this.http.get<BarbeiroDto>(`${this.baseUrl}/${barbeiroId}`);
  }

  findAll(): Observable<BarbeiroDto[]> {
    return this.http.get<BarbeiroDto[]>(`${this.baseUrl}/listarBarbeiros`);
  }

  save(barbeiro: BarbeiroDto): Observable<BarbeiroDto> {
    return this.http.post<BarbeiroDto>(this.baseUrl, barbeiro);
  }

  update(barbeiroId: number, barbeiro: BarbeiroDto): Observable<BarbeiroDto> {
    return this.http.put<BarbeiroDto>(`${this.baseUrl}/${barbeiroId}`, barbeiro);
  }

  delete(barbeiroId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${barbeiroId}`);
  }
}
