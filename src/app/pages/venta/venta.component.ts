import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentasComponent implements OnInit {
  ventasForm: FormGroup;
  registroExitoso: boolean = false;
  clientes: any[] = [];
  empleados: any[] = [];
  transportistas: any[] = [];
  productos: any[] = [];
  selectedProducts: any[] = [];

  constructor(private formBuilder: FormBuilder, private ventasService: VentasService) {
    this.ventasForm = this.formBuilder.group({
      customerid: [''],
      employeeid: [''],
      orderdate: [''],
      shipperid: [''],
      productid: [''],
      quantity: ['']
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.ventasService.getClientes().subscribe(data => this.clientes = data);
    this.ventasService.getEmpleados().subscribe(data => this.empleados = data);
    this.ventasService.getTransportistas().subscribe(data => this.transportistas = data);
    this.ventasService.getProductos().subscribe(data => this.productos = data);
  }

  agregarProducto(): void {
    const productoId = this.ventasForm.get('productid')?.value;
    const cantidad = this.ventasForm.get('quantity')?.value;
    const producto = this.productos.find(p => p.productid == productoId);

    if (producto) {
      this.selectedProducts.push({ ...producto, quantity: cantidad });
      this.ventasForm.get('productid')?.reset();
      this.ventasForm.get('quantity')?.reset();
    }
  }

  cancelarVenta(): void {
    this.ventasForm.reset();
    this.selectedProducts = [];
  }

  onSubmit(): void {
    const customerid = this.ventasForm.get('customerid')?.value;
    const employeeid = this.ventasForm.get('employeeid')?.value;
    const orderdate = this.ventasForm.get('orderdate')?.value;
    const shipperid = this.ventasForm.get('shipperid')?.value;

    const formData = new FormData();
    formData.append('customerid', customerid);
    formData.append('employeeid', employeeid);
    formData.append('orderdate', orderdate);
    formData.append('shipperid', shipperid);
    formData.append('products', JSON.stringify(this.selectedProducts));

    this.ventasService.registrarVenta(formData).subscribe(response => {
      this.registroExitoso = true;
      console.log('Venta registrada exitosamente', response);
      this.cancelarVenta(); // Limpiar todos los campos después de la transacción
    }, error => {
      console.error('Error al registrar venta', error);
    });
  }
}
