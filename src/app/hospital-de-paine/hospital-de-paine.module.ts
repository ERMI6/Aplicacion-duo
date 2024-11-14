import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalDePainePageRoutingModule } from './hospital-de-paine-routing.module';

import { HospitalDePainePage } from './hospital-de-paine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalDePainePageRoutingModule
  ],
  declarations: [HospitalDePainePage]
})
export class HospitalDePainePageModule {}
