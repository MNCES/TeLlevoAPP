//map-controller.service.ts

import { Marker } from './../models/marker.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var window: any;
const apiKey = "AIzaSyD4xDXk6sHTvzgKY7rTb3SRGuKjg-xbgIo";

@Injectable({
  providedIn: 'root'
})
export class MapControllerService {
  
  private marker: Marker = {
    position: {
      lat:-33.0347,
      lng:-71.5337,
    },
    title:"DuocUC"
  };

  constructor(private http: HttpClient) { }

  getMarker(){
    return this.marker;
  }

  addMarker(marker: Marker) {
    this.marker = marker;
  }

  resetMarker(){
    this.marker = this.marker;
  }

  getHttpData(marker: Marker) {
    var link = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xDXk6sHTvzgKY7rTb3SRGuKjg-xbgIo&libraries=places';
    return this.http.get(link);
    
  }
}


