//restablecer-contrasena.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  usuario: string = '';
  mensaje: any
  activarContra : boolean = false;
  contraNueva: string = ''

  constructor(private router: Router, private apiService: ApiService) {}

  async comprobarUsuario() {
    //usuarioValido es un json, por como se retorna de la api, la parte principal que se necesita
    //es items (que es un array), por eso en el if se accede a items y se comprueba si esta vacio
    //de estarlo significa que no existe el usuario, pero cuando exista, se cambia a true
    //la variable que maneja si se muestra o no el campo para cambiar la contraseña
    let usuarioValido = await this.apiService.verificarUsuarioExiste(this.usuario)
    if (usuarioValido.items.length === 0) {
      this.mensaje = 'Usuario No existe'
      this.activarContra = false
      return
    }
    this.activarContra = true
  }

  disponibleNueva(){
    //Esta es la funcion para comprobar si es que se muestra o no los campos para cambiar la contra
    return this.activarContra
  }

  async cambiarContra(){
    //aqui this.mensaje almacena lo que se retorna de la api, en este caso al ser un put,
    //se tiene puesto de extra que se retorne un parametro que se llama mensaje, este se retorna
    //como un json, por eso se accede como this.mensaje.mensaje
    this.mensaje = await this.apiService.cambiarContra(this.usuario, this.contraNueva)
    this.mensaje = this.mensaje.mensaje

    //Cuando la contraseña se cambie correctamente se vuelve a ocultar el campo para cambiar la contra
    //Como vaciar los campos
    if(this.mensaje === 'Contraseña cambiada con exito.') {
      this.activarContra = false
      this.usuario = ''
      this.contraNueva = ''
    }
    
  }


}
