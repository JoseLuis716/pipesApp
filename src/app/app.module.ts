import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module'; 
//cambiar el local de la app
import localEs from '@angular/common/locales/es-MX';
//si se quiere agregar otro idioma hay que registrarla como con es-MX
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common'

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID ,
    useValue: 'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
