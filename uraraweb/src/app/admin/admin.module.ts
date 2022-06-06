import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { InicioComponent } from './component/inicio/inicio.component';





@NgModule({
  declarations: [
    DashboardComponent,
    AgregarComponent,
    InventarioComponent,
    TablaComponent,
    InicioComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
