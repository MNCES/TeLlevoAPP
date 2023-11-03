//pagina-inicio.page.html

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage {
  username: string | undefined;
  

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

    ngOnInit() {
    }
  
  user = localStorage.getItem('usuario')

  async cerrar() {
    const alert = await this.alertController.create({
      header: 'cerrar sesión',
      message: '¿ya te vas?',
      buttons: [
        {
          text:'no',
          handler:() => {
          }
      },{
        text:'si',
          handler:() => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('ingreso-usuario');
        }
      }
    ]
    });

    await alert.present();
  }
}
