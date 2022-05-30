import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgregarComponent } from './component/agregar/agregar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
