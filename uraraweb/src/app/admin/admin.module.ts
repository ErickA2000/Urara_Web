import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { TablaComponent } from './component/tabla/tabla.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AgregarComponent,
    InventarioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
