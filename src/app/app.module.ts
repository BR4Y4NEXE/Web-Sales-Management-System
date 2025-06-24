import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeService } from './services/employee.service';
import { ClientesComponent } from './pages/customers/customers.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosService } from './services/productos.service';
import { ProveedorService } from './services/proveedores.service';
import { BackgroundService } from './services/background.service';
import { VentasService } from './services/ventas.service';
import { VentasComponent } from './pages/venta/venta.component';
import { ProveedorComponent } from './pages/proveedores/proveedores.component';

@NgModule({
  declarations: [
    VentasComponent,
    ProveedorComponent,
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriaComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, CategoriaService, ProductosService, ProveedorService, BackgroundService, VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
