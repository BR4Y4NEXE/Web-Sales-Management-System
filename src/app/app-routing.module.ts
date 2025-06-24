import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/customers/customers.component';
import { VentasComponent } from './pages/venta/venta.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProveedorComponent } from './pages/proveedores/proveedores.component';

const routes: Routes = [
  { path: 'proveedores', component: ProveedorComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'venta', component: VentasComponent },
  { path: 'customers', component: ClientesComponent },
  { path: 'Cliente', component: ClienteComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
