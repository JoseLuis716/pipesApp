import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre:string = 'joSé LuIS';
  valor:number = 200000000;
  MostrarNombre(){
   console.log(this.nombre);
  }
}
