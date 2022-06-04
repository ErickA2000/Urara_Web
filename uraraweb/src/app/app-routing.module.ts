import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './home/component/inicio/inicio.component';
import { Error404Component } from './shared/component/error404/error404.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'panel', 
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '404', component: Error404Component
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/inicio'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
