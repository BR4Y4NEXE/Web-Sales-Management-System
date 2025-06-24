import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost/ConsultaDatos/product.php'; 
  private categoriasUrl = 'http://localhost/ConsultaDatos/Cnsul_Categ.php';
  private proveedoresUrl = 'http://localhost/ConsultaDatos/Cnsul_Prov.php';

  constructor(private http: HttpClient) {}

  registrarProducto(producto: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto);
  }

  obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasUrl);
  }

  obtenerProveedores(): Observable<any[]> {
    return this.http.get<any[]>(this.proveedoresUrl);
  }
}