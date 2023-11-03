//noauto.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { NoautoPage } from './noauto.page';
import { NoautoRoutingModule } from './noauto-routing.module';

@NgModule({
  declarations: [
    NoautoPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GoogleMapsModule,
    NoautoRoutingModule
  ],
  exports: [
   
  ],
})
export class NoautoPageModule {}
