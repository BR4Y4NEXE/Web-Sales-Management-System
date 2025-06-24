import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProveedorService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedorComponent implements OnInit {
  proveedoresForm: FormGroup;
  registroExitoso: boolean = false; // Variable para controlar si se muestra el mensaje de éxito

  constructor(private formBuilder: FormBuilder, private proveedorService: ProveedorService) {
    this.proveedoresForm = this.formBuilder.group({
      suppliername: [''],
      contactname: [''],
      address: [''],
      city: [''],
      postalcode: [''],
      country: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('suppliername', this.proveedoresForm.get('suppliername')?.value);
    formData.append('contactname', this.proveedoresForm.get('contactname')?.value);
    formData.append('address', this.proveedoresForm.get('address')?.value);
    formData.append('city', this.proveedoresForm.get('city')?.value);
    formData.append('postalcode', this.proveedoresForm.get('postalcode')?.value);
    formData.append('country', this.proveedoresForm.get('country')?.value);
    formData.append('phone', this.proveedoresForm.get('phone')?.value);

    this.proveedorService.registrarProveedor(formData).subscribe(response => {
      this.registroExitoso = true; // Mostrar mensaje de éxito
      console.log('Registro exitoso', response);
      this.proveedoresForm.reset(); // Limpiar campos del formulario
    }, error => {
      console.error('Error al registrar', error);
    });
  }
}
