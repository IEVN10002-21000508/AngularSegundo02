import { Routes } from '@angular/router';
import { Component } from '@angular/core';

export const routes: Routes = [
  //{
 //   path: 'auth',
 //   loadChildren: () => import('./auth/features/auth.routes')
 // },
 // {
  //  path: 'formularios',
 //   loadChildren: () => import('./formularios/formularios.routes')
 // },
  {
  path:'utl',
  loadChildren:()=>
    import('./utl/utl.routes').then((m) => m.default),
  }
];
