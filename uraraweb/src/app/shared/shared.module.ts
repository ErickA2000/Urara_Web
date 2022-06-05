import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Error404Component } from './component/error404/error404.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ]
})
export class SharedModule { }
