import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IngresoUsuarioPage } from './ingreso-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: IngresoUsuarioPage
      }
    ])
  ],
  declarations: [IngresoUsuarioPage]
})
export class IngresoUsuarioPageModule {}
