import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  cDefinicionUpper: string = "convierte texto a mayúsculas";
  cDefinicionLower: string = "CONVIERTE TEXTO A MINUSCULAS";
  cDefinicionTittle: string = "caPitAlizA eL tExTo  ";
  constructor() { }

}
