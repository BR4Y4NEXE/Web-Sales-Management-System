import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost/ConsultaDatos/employee.php';  

  constructor(private http: HttpClient) { }

  registerEmployee(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
