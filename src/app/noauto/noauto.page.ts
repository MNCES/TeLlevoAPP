// noauto.page.ts
import { Component } from '@angular/core';
import { ViajesService } from '../services/viajes.service';
import {ViewChild, ElementRef} from '@angular/core'

declare var google: any;

@Component({
  selector: 'app-noauto',
  templateUrl: './noauto.page.html',
  styleUrls: ['./noauto.page.scss'],
})
export class NoautoPage {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  origen: string = '';
  destino: string = '';
  map: any;

  @ViewChild('map', { read: ElementRef, static: false })
  mapRef!: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title:  "Duoc UC: Sede Viña Del Mar",
      latitude: "-33.033419363942166",
      longitude: "-71.53314118465657"
    },
    {
      title:  "Loncoche 85",
      latitude: "-33.026571",
      longitude: "-71.502892"
    }
  ];

  constructor(private viajesService: ViajesService) {}

  registrarViaje() {
    const datosPasajero = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      origen: this.origen,
      destino: this.destino,
    };

    this.viajesService.registrarPasajero(datosPasajero).subscribe(
      () => {
        this.mostrarMensaje('¡Registro exitoso!');
      },
      () => {
        this.mostrarMensaje('Error al registrar el viaje.');
      }
    );
  }

  mostrarMensaje(mensaje: string) {
    
    console.log(mensaje);
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers: any[]) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(+marker.latitude, +marker.longitude); // Parse to numbers
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker: any) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' + 
                              '<p>Longitude: ' + marker.longitude + '</p>' + 
                              '<ion-button id= "navegate"> Navegate </ion-button>'
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        const navigateButton = document.getElementById('navigate');
        if (navigateButton) {
          navigateButton.addEventListener('click', () => {
            console.log("navigate button clicked!");
            window.open('https://www.google.com/maps/dir?api=1&destination=' + marker.latitude + ',' + marker.longitude);
          });
        }
      });
    });

    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap() {
    if (google && google.maps) {
      const location = new google.maps.LatLng(-33.033419363942166, -71.53314118465657);
      const options = {
        center: location,
        zoom: 15,
        disableDefaultUI: true
      };
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      this.addMarkersToMap(this.markers);
    } else {
      console.error('La API de Google Maps no está disponible.');
    }
  }
}