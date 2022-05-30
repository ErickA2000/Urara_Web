import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Error404Component } from './component/error404/error404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ]
})
export class SharedModule { }
