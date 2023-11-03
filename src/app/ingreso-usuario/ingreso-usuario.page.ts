import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage {
  rut: string = '';
  contra: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  async iniciarSesion() {
    // Llama a la función verificarUsuarioExiste del servicio para comprobar si el usuario existe
    const userData = {
      rut: this.rut, // Utiliza el Rut para autenticación
      contra: this.contra,
    };

    const usuarioValido = await this.apiService.verificarUsuarioExiste(userData.rut);

    if (usuarioValido.items.length > 0) {
      // El usuario existe en la base de datos, redirige a la vista deseada
      this.router.navigate(['/pagina-inicio']);
    } else {
      // Usuario no encontrado, muestra un mensaje de error
      this.errorMessage = 'Credenciales no válidas';
    }
  }
}
