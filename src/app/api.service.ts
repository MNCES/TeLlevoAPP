//api.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://g13be4d4999113d-qfojn116enmtuv5h.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario';
  public apiComprobarUsuario = 'https://g13be4d4999113d-qfojn116enmtuv5h.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/recuperarContra/comprobar/'
  private apiModificarContra = 'https://g13be4d4999113d-qfojn116enmtuv5h.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/recuperarContra/modificar'

  constructor(private http: HttpClient) { }

  // Obtener usuarios (GET)
  getUsers() {
    return this.http.get(`${this.apiURL}/usuario`);
  }

  // Crear un usuario (POST)
  createUser(userData: any) { // Establece un tipo adecuado para userData
    return this.http.post(`${this.apiURL}/usuario`, userData);
  }

  // Eliminar un usuario (DELETE)
  deleteUser(userId: any) { // Establece un tipo adecuado para userId
    return this.http.delete(`${this.apiURL}/get_usuario/${userId}`);
  }

  // Actualizar un usuario (PUT)
  updateUser(userId: any, updatedUserData: any) { // Establece tipos adecuados para userId y updatedUserData
    return this.http.put(`${this.apiURL}/usario/${userId}`, updatedUserData);
  }

  async verificarUsuarioExiste(rut: string) {
    try {
      console.log('Llamando a verificarUsuarioExiste con rut:', rut);
      // Aquí se hace el llamado a la API en el método GET y se retorna un objeto request
      const respuesta = await fetch(this.apiComprobarUsuario + rut);
  
      // Se valida si dio o no dio error
      if (!respuesta.ok) {
        // Aquí, en lugar de lanzar un error genérico, puedes lanzar un error específico que indique que el usuario no existe.
        throw new Error('Usuario no encontrado');
      }
  
      // Se cambian los datos retornados del objeto request a un JSON para que podamos manejarlos y se retornan
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error('Error al verificar usuario:', error);
      // Puedes retornar un valor específico o lanzar un error aquí según tus necesidades.
      throw error;
    }
  }

  async cambiarContra(rut : string, contra : string) {
    try {
      //Aqui se hace el llamado a la api en metodo PUT, y retorna un objeto request
      const url = this.apiModificarContra;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Especifica el tipo de contenido del cuerpo
        },
        //Aqui van en el body los parametros que uno tiene que mandar
        body: JSON.stringify({
          "rut" : rut,
          "contra" : contra
        }), // Puedes enviar un objeto vacío si no necesitas enviar datos específicos en el cuerpo
      });
  
      //Se valida si dio o no dio error
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }
      
      //Se cambian los datos retornados del objeto request
      //A un JSON para que podamos manejarlo y se retornan
      const datos = await response.json();
      return datos;
  
    } catch (error) {
      console.error('Error:', error);
      return error
    }
  }


}
