import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  cNombre: string = "Fernando";
  cGenero: string = "masculino";

  //i18nSelect
  invitacionMap={
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Luis','Ana'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }
  constructor() { }
  
  CambiarGenero(){
    if(this.cGenero=='masculino'){
      //cambiar a fenemino
      this.cNombre = "Lizbeth";
      this.cGenero = "femenino";
    }else{
      this.cNombre = "José Luis";
      this.cGenero = "masculino";
    }
  }

  RestarCliente(){
    this.clientes.pop();
  }

  //keyValuePipe
  persona = {
    nombre: "Jose Luis",
    edad: 25,
    direccion: "Mérida, Yuc"
  }

  //JSONPipe
  heroes = [
    {
      nombre:"Super Man",
      vuela: "true",
    },
    {
      nombre:"Spider Man",
      vuela: "false",
    },
    {
      nombre:"Aquaman Man",
      vuela: "false",
    }
  ];

  //asyncPipe
  miObservable = interval (100); //0,1,2,3,4

  valorPromesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesas')
    }, 3500);
  });
}
