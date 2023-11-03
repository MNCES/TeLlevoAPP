// noauto-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoautoPage } from './noauto.page';


const routes: Routes = [
  {
    path: '',
    component: NoautoPage,//GoogleMapsDemoComponent, // Asocia la ruta con el componente de la página
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoautoRoutingModule {}
