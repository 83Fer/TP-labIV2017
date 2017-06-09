import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { LoginComponent } from '../pages/login/login.component';
import { AbmUsuarioComponent } from '../pages/abm-usuario/abm-usuario.component';
import { AbmSucursalesComponent } from '../pages/abm-sucursales/abm-sucursales.component';
import { AbmReservasComponent } from '../pages/abm-reservas/abm-reservas.component';
import { AbmPedidosComponent } from '../pages/abm-pedidos/abm-pedidos.component';
import { AbmPlatosComponent } from '../pages/abm-platos/abm-platos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AbmUsuarioComponent,
    AbmSucursalesComponent,
    AbmReservasComponent,
    AbmPedidosComponent,
    AbmPlatosComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
