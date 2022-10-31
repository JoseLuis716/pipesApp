import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [{
    provide: LOCALE_ID ,
    useValue: 'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
