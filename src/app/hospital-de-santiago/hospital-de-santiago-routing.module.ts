import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalDeSantiagoPage } from './hospital-de-santiago.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalDeSantiagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalDeSantiagoPageRoutingModule {}
