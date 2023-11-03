//registro-usuario.page.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular'; // Agregamos la importación del AlertController

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) { 

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'repitecontraseña': new FormControl("",Validators.required),

    });

  }


  ngOnInit() {
  }

  async guardar(){
    var reg = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      console.log('El formulario es inválido');
      const alert = await this.alertController.create({
        header: 'Te faltan datos',
        message: 'Llena todos los campos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    var usuario = {
      nombre: reg.nombre,
      contraseña: reg.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('login');
  }
}



