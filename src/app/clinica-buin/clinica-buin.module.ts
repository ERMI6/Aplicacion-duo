import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicaBuinPageRoutingModule } from './clinica-buin-routing.module';

import { ClinicaBuinPage } from './clinica-buin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicaBuinPageRoutingModule
  ],
  declarations: [ClinicaBuinPage]
})
export class ClinicaBuinPageModule {}
