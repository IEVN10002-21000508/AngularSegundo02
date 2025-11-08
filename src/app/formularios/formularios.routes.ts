
export default [

{
    path:'distancia',
    loadComponent:()=>import('../formularios/distancia/distancia.component').then(m=>m.DistanciaComponent)
  },

  {
    path:'multiplicacion',
    loadComponent:()=>import('../formularios/multiplicacion/multiplicacion.component').then(m=>m.MultiplicacionComponent)
  },

  {
    path:'zodiaco',
    loadComponent:()=>import('../formularios/zodiaco/zodiaco.component').then(m=>m.ZodiacoComponent)
  }

  ]
