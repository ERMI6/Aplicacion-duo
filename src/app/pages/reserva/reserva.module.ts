import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaPageRoutingModule } from './reserva-routing.module';  // Cambié "RecerbaPageRoutingModule" a "ReservaPageRoutingModule"

import { ReservaPage } from './reserva.page';  // Cambié "RecerbaPage" a "ReservaPage"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule  // Cambié "RecerbaPageRoutingModule" a "ReservaPageRoutingModule"
  ],
  declarations: [ReservaPage]  // Cambié "RecerbaPage" a "ReservaPage"
})
export class ReservaPageModule {}  // Cambié "RecerbaPageModule" a "ReservaPageModule"
