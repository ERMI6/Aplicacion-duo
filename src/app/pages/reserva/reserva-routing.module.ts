import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaPage } from './reserva.page';  // Cambié "RecerbaPage" a "ReservaPage"

const routes: Routes = [
  {
    path: '',
    component: ReservaPage  // Cambié "RecerbaPage" a "ReservaPage"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaPageRoutingModule {}  // Cambié "RecerbaPageRoutingModule" a "ReservaPageRoutingModule"
