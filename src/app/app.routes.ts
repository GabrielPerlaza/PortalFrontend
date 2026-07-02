import { Routes } from '@angular/router';

import { authGuard } from '../core/guards/auth-guard';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login')
        .then(m => m.LoginComponent)
  },

  {
    path: '',
    
    canActivate: [authGuard],
    loadComponent: () =>
      import('../shared/layouts/admin-layout/admin-layout')
        .then(m => m.AdminLayoutComponent),

    children: [

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },

      {
        path: 'articulos',
        loadComponent: () =>
          import('../pages/lista-articulos/lista-articulos')
            .then(m => m.ListaArticulosComponent)
      },{
            path: 'articulos/nuevo',
            loadComponent: () =>
            import('../pages/form-articulos/form-articulos')
            .then(m => m.FormArticulosComponent)
},
       {
        path: 'articulos/editar/:id',
        loadComponent: () =>
          import('../pages/form-articulos/form-articulos')
            .then(m => m.FormArticulosComponent)
      }

      

    ]
  }
];
