import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoUsuarioPageRoutingModule } from './ingreso-usuario-routing.module';

import { IngresoUsuarioPage } from './ingreso-usuario.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,HttpClientModule,
    IonicModule,
    IngresoUsuarioPageRoutingModule
  ],
  declarations: [IngresoUsuarioPage],
  providers: [ApiService],
})
export class IngresoUsuarioPageModule {}
