import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private apiUrl = 'http://localhost/ConsultaDatos/proveedor.php'; 

  constructor(private http: HttpClient) {}

  registrarProveedor(proveedor: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, proveedor);
  }
}
