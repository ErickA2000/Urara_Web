import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home', component: InicioComponent
      },
      {
        path: 'inventario', component: InventarioComponent,
        children: [
          {
            path: '', component: TablaComponent
          },
          {
            path: 'productos/agregar', component: AgregarComponent
          },          
          {
            path: '**', redirectTo: '', pathMatch: 'full'
          }
        ]
      }
      // {
      //   path: 'agregar', component: AgregarComponent
      // },
      // {
      //   path: '**', pathMatch: 'full', redirectTo: '/404'
      // }
    
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
export class AdminRoutingModule { }
