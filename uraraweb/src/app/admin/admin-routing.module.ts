import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgregarComponent } from './component/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: '**', redirectTo: 'inicio'
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
export class AdminRoutingModule { }
