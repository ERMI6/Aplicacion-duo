import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalDePainePage } from './hospital-de-paine.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalDePainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalDePainePageRoutingModule {}
