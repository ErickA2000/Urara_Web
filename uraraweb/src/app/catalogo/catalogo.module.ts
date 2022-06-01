import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';



@NgModule({
  declarations: [
    ProductosComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogoModule { }
