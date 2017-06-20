import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Google Maps
import { AgmCoreModule } from '@agm/core';

// Bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

//Vistas
import { AppComponent } from './app.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { LoginComponent } from '../pages/login/login.component';
import { AbmUsuarioComponent } from '../pages/abm-usuario/abm-usuario.component';
import { AbmSucursalesComponent } from '../pages/abm-sucursales/abm-sucursales.component';
import { AbmReservasComponent } from '../pages/abm-reservas/abm-reservas.component';
import { AbmPedidosComponent } from '../pages/abm-pedidos/abm-pedidos.component';
import { AbmPizzasComponent } from '../pages/abm-pizzas/abm-pizzas.component';

//Servicios
import { UsuarioService } from '../servicios/webService/usuario/usuario.service';
import { PizzaService } from '../servicios/webService/pizza/pizza.service';

// Firebase2
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService } from 'app/providers/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AbmUsuarioComponent,
    AbmSucursalesComponent,
    AbmReservasComponent,
    AbmPedidosComponent,
    AbmPizzasComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKvI_59Z1HO6TUfIciUazcgRkcRcdPuOQ',
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UsuarioService,
    AngularFireModule,
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
