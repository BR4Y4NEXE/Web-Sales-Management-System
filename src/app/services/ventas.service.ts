import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl = 'http://localhost/ConsultaDatos';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Cnsul_clientes.php`);
  }

  getEmpleados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Cnsul_empleados.php`);
  }

  getTransportistas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Cnsul_shippers.php`);
  }

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Cnsul_productos.php`);
  }

  registrarVenta(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/ventas.php`, formData);
  }
}
