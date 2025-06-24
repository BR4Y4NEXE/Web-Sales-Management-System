import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../../services/customer.service';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class ClientesComponent implements OnInit {
  clientesForm: FormGroup;
  registroExitoso: boolean = false; // Variable para controlar si se muestra el mensaje de éxito

  constructor(private formBuilder: FormBuilder, private clientesService: ClientesService, private backgroundService: BackgroundService) {
    this.clientesForm = this.formBuilder.group({
      customername: [''],
      contactname: [''],
      address: [''],
      city: [''],
      postalcode: [''],
      country: ['']
    });
    this.backgroundService.setBackground('background-customers');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('customername', this.clientesForm.get('customername')?.value);
    formData.append('contactname', this.clientesForm.get('contactname')?.value);
    formData.append('address', this.clientesForm.get('address')?.value);
    formData.append('city', this.clientesForm.get('city')?.value);
    formData.append('postalcode', this.clientesForm.get('postalcode')?.value);
    formData.append('country', this.clientesForm.get('country')?.value);

    this.clientesService.registrarCliente(formData).subscribe(response => {
      this.registroExitoso = true; // Mostrar mensaje de éxito
      console.log('Registro exitoso', response);
      this.clientesForm.reset(); // Limpiar campos del formulario
    }, error => {
      console.error('Error al registrar', error);
    });
  }
}
