import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalDeSantiagoPageRoutingModule } from './hospital-de-santiago-routing.module';

import { HospitalDeSantiagoPage } from './hospital-de-santiago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalDeSantiagoPageRoutingModule
  ],
  declarations: [HospitalDeSantiagoPage]
})
export class HospitalDeSantiagoPageModule {}
