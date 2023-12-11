// viajes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private http: HttpClient) {}

  registrarPasajero(datosPasajero: any) {
    return this.http.post('https://g13be4d4999113d-qfojn116enmtuv5h.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/viaje/viaje', datosPasajero);
  }

  simularRespuestaExitosa() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('Registro exitoso');
        observer.complete();
      }, 1000);
    });
  }
}
