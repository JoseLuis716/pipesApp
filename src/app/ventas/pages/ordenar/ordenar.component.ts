import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  lCambio:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  Cambiar(){
    return this.lCambio = !this.lCambio;
  }

}
