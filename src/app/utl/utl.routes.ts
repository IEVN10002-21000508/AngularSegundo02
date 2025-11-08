import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
export default [

{
    path:'listaalumnos',
    loadComponent:()=>import('./alumnos/alumnos.component').then(m=>m.AlumnosComponent)
  },

  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component').then(m=>m.AgregarComponent)
  },

  {
    path:'listaalumnos',
    loadComponent:()=>import('./eliminar/eliminar.component').then(m=>m.EliminarComponent)
  },

  {
    path:'eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component').then(m=>m.EliminarComponent)
  },
  {
    path:'editar/:matricula',
    loadComponent:()=>import('./editar/editar.component').then(m=>m.EditarComponent)
  }

  ]
