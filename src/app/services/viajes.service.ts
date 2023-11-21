//viajes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  constructor(private http: HttpClient) {}

  registrarPasajero(datosPasajero: any) {
    return this.http.post('URL_DEL_BACKEND_PARA_REGISTRAR', datosPasajero);
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
