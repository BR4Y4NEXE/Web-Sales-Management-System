import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost/ConsultaDatos/categoria.php';  

  constructor(private http: HttpClient) { }

  registerCategory(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
