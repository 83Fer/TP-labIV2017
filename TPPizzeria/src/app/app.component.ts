import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public vistaPedidos: string;
  public vistaUser: string;
  public vistaReservas: string;
  public vistaPlatos: string;
  
  title = 'app works!';
}
