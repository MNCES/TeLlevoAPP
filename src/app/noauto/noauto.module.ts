import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoautoPageRoutingModule } from './noauto-routing.module';

import { NoautoPage } from './noauto.page';
import { HttpClientModule } from '@angular/common/http';
import { ViajesService } from '../services/viajes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,HttpClientModule,
    NoautoPageRoutingModule
  ],
  declarations: [NoautoPage],
  providers: [ViajesService],
})
export class NoautoPageModule {}
