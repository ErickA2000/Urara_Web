import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';



@NgModule({
  declarations: [
    ProductosComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
