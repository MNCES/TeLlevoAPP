// noauto.page.ts
import { Component } from '@angular/core';
import { ViajesService } from '../services/viajes.service';

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
    // Aquí se puede implementar la lógica para mostrar el mensaje, por ejemplo:
    console.log(mensaje);
    // O utilizando una librería de notificaciones como ToastController
    // this.toastController.create({
    //   message: mensaje,
    //   duration: 2000,
    // }).then((toast) => toast.present());
  }
}