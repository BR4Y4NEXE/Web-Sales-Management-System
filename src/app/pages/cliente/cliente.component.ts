import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from './../../services/employee.service';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private backgroundService: BackgroundService) {
    this.clienteForm = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      BirthDate: [''],
      Photo: [''],
      Notes: ['']
    });
    this.backgroundService.setBackground('background-cliente');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('FirstName', this.clienteForm.get('FirstName')?.value);
    formData.append('LastName', this.clienteForm.get('LastName')?.value);
    formData.append('BirthDate', this.clienteForm.get('BirthDate')?.value);
    formData.append('Photo', (this.clienteForm.get('Photo')?.value as File) || null);
    formData.append('Notes', this.clienteForm.get('Notes')?.value);

    this.employeeService.registerEmployee(formData).subscribe(response => {
      console.log('Registro exitoso', response);
    }, error => {
      console.error('Error al registrar', error);
    });
  }
}
