import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  lCambio: boolean = true;
  Heroes: Heroe[] = [{
    nombre: 'Iron Man',
    vuela: true,
    color: Color.rojo
  }, {
    nombre: 'Hulk',
    vuela: false,
    color: Color.verde
  }, {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.rojo
  }];

  Cambiar() {
    return this.lCambio = !this.lCambio;
  }
  Ordenar() {

  }


}
