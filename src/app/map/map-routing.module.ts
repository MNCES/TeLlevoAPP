//map-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsDemoComponent } from './map.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapComponentRoutingModule {}
