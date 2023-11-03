//map.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'; // Importa GoogleMapsModule

import { GoogleMapsDemoComponent } from './map.component';
import { MapComponentRoutingModule } from './map-routing.module'; // Asegúrate de tener un archivo map-routing.module.ts

@NgModule({
  declarations: [GoogleMapsModule],
  imports: [CommonModule, IonicModule, FormsModule, GoogleMapsModule, MapComponentRoutingModule, GoogleMapsDemoComponent], // Agrega GoogleMapsModule
})
export class MapPageModule {}
