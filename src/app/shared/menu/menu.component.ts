import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Archivo',
          items: [{
                  label: 'Nuevo', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Proyecto'},
                      {label: 'Otros'},
                  ]
              },
              {label: 'Abrir'},
              {label: 'Cerrar'}
          ]
      },
      {
          label: 'Editar',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Borrar', icon: 'pi pi-fw pi-trash'},
              {label: 'Recargar', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

}
