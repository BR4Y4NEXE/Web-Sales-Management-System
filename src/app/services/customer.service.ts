import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost/ConsultaDatos/customer.php'; 

  constructor(private http: HttpClient) {}

  registrarCliente(cliente: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }
}