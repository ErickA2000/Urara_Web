import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: ProductosComponent
      },
      {
        path: 'detalle-producto/:id', component: DetallesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogoRoutingModule { }
