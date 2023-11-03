// noauto.page.ts

import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-noauto',
  templateUrl: './noauto.page.html',
  styleUrls: ['./noauto.page.scss'],
})
export class NoautoPage implements OnInit {
  private map: google.maps.Map | null = null;
  private destination: string = '';
  public tarifaEstimada: number = 0;

  constructor() { }

  async ngOnInit() {
   // await this.initMap();
  }

  async initMap() {
    await this.loadGoogleMaps();

    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    const mapElement: HTMLElement | null = document.getElementById('map');
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, mapOptions);

      const { Geolocation } = Plugins;
      const geolocationPlugin = Geolocation as any;
      const position = await geolocationPlugin.getCurrentPosition();
      const userLocation: google.maps.LatLngLiteral = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      if (this.map) {
        this.map.setCenter(userLocation);
      }
    }
  }

  async loadGoogleMaps() {
    if (typeof google === 'undefined') {
      return new Promise<void>((resolve) => {
        // Carga el script de Google Maps
        const script = document.createElement('script');
        script.id = 'googleMapsScript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAi7GOQUFKWM_6_T8H6-FIPfE2Eqan__BM&libraries=places&callback=googleMapsLoaded';
        document.body.appendChild(script);
      });
    }
  }

  actualizarDestino(event: CustomEvent) {
    const valorDeBusqueda = event.detail.value as string;
    this.destination = valorDeBusqueda;
    this.calcularTarifaEstimada();
  }

  calcularTarifaEstimada() {
    if (this.map) {
      const service = new google.maps.DistanceMatrixService();
      const request: google.maps.DistanceMatrixRequest = {
        origins: [/* Ubicación de inicio, como la ubicación del usuario */],
        destinations: [this.destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      };

      service.getDistanceMatrix(request, (response, status) => {
        if (status === google.maps.DistanceMatrixStatus.OK) {
          const element = response?.rows[0]?.elements[0];
          if (element?.status === google.maps.DistanceMatrixElementStatus.OK) {
            const distanciaEnMetros = element.distance?.value || 0;
            const tarifaCalculada = this.calcularTarifa(distanciaEnMetros);
            this.tarifaEstimada = tarifaCalculada;
          }
        }
      });
    }
  }

  calcularTarifa(distanciaEnMetros: number): number {
    const tarifaPorMetro = 5; // 5 pesos chilenos por metro
    return distanciaEnMetros * (tarifaPorMetro / 1000);
  }

  buscarConductor() {
    // Realiza acciones para comenzar la búsqueda de un conductor
  }
}
