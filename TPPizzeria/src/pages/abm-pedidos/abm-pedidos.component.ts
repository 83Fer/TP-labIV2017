import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abm-pedidos',
  templateUrl: './abm-pedidos.component.html',
  styleUrls: ['./abm-pedidos.component.css']
})
export class AbmPedidosComponent implements OnInit {

  mostrar:string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
    set Mostrar(vista:any){
      console.log(vista);
      this.mostrar = vista;
    }

}
