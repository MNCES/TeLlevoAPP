import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'map.component',
  templateUrl: './map.component.html',
})
export class GoogleMapsDemoComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  mapOptions: google.maps.MapOptions;

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = this.loadGoogleMaps();
    this.mapOptions = { center: { lat: 40, lng: -20 }, zoom: 8 }; // Inicialización de mapOptions
  }

  ngOnInit() {
    this.apiLoaded.subscribe((loaded) => {
      if (loaded) {
        // El mapa está cargado, puedes realizar operaciones relacionadas con el mapa aquí.
        this.initializeMap();
      } else {
        // Hubo un error al cargar el mapa, puedes manejarlo aquí.
        console.error('Error al cargar el mapa.');
        // Puedes mostrar un mensaje de error o realizar acciones específicas en caso de fallo.
      }
    });
  }

  loadGoogleMaps(): Observable<boolean> {
    return this.httpClient.jsonp(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyAi7GOQUFKWM_6_T8H6-FIPfE2Eqan__BM&libraries=places`,
      'callback'
    ).pipe(
      map(() => true),  // Carga exitosa
      catchError(() => of(false))  // Error al cargar
    );
  }

  initializeMap() {
    const mapElement: HTMLElement | null = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, this.mapOptions);
      // Puedes agregar marcadores, polilíneas u otras funcionalidades del mapa aquí.
    }
  }
}
