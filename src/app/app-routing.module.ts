import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './services/database.service';  // Asegúrate de que esta importación sea correcta

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [DatabaseService]  // Protegemos esta ruta con el servicio
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404PageModule)
  },
  {
    path: 'reserva',  // Cambié "recerba" a "reserva"
    loadChildren: () => import('./pages/reserva/reserva.module').then(m => m.ReservaPageModule)  // Cambié "RecerbaPageModule" a "ReservaPageModule"
  },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full'
  },
  {
    path: 'clinica-buin',
    loadChildren: () => import('./clinica-buin/clinica-buin.module').then( m => m.ClinicaBuinPageModule)
  },
  {
    path: 'hospital-de-paine',
    loadChildren: () => import('./hospital-de-paine/hospital-de-paine.module').then( m => m.HospitalDePainePageModule)
  },
  {
    path: 'hospital-de-santiago',
    loadChildren: () => import('./hospital-de-santiago/hospital-de-santiago.module').then( m => m.HospitalDeSantiagoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
