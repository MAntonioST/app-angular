import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Marco Antonio"
    usuario.email = "marco.teixeira@gmail.com"

    return usuario
  }

  public listaUsuario():Usuario[]{
    return [
      {
        nome:"Holly Holm",
        email:"holly.holm@gmail.com"
      },
      {
        nome:"Valentina Shevchenko",
        email:"valentina.shevchenko@gmail.com"
      },
      {
        nome:"Ronda Rousey",
        email:"ronda.rousey@gmail.com"
      },
      {
        nome:" Amanda Nunes",
        email:"amanda.nunes@gmail.com"
      },
    ]
  }

}
