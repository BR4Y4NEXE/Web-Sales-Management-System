import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productosForm: FormGroup;
  registroExitoso: boolean = false; // Variable para controlar si se muestra el mensaje de éxito
  categorias: any[] = [];
  proveedores: any[] = [];

  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private backgroundService: BackgroundService) {
    this.productosForm = this.formBuilder.group({
      productname: [''],
      supplierid: [''],
      categoryid: [''],
      unit: [''],
      price: ['']
    });
    this.backgroundService.setBackground('background-productos');
  }

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProveedores();
  }

  cargarCategorias(): void {
    this.productosService.obtenerCategorias().subscribe(data => {
      console.log('Categorías obtenidas:', data); // Log para depuración
      this.categorias = data;
    }, error => {
      console.error('Error al obtener categorías', error);
    });
  }

  cargarProveedores(): void {
    this.productosService.obtenerProveedores().subscribe(data => {
      console.log('Proveedores obtenidos:', data); // Log para depuración
      this.proveedores = data;
    }, error => {
      console.error('Error al obtener proveedores', error);
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('productname', this.productosForm.get('productname')?.value);
    formData.append('supplierid', this.productosForm.get('supplierid')?.value);
    formData.append('categoryid', this.productosForm.get('categoryid')?.value);
    formData.append('unit', this.productosForm.get('unit')?.value);
    formData.append('price', this.productosForm.get('price')?.value);

    this.productosService.registrarProducto(formData).subscribe(response => {
      this.registroExitoso = true; // Mostrar mensaje de éxito
      console.log('Registro exitoso', response);
      this.productosForm.reset(); // Limpiar campos del formulario
    }, error => {
      console.error('Error al registrar', error);
    });
  }
}
