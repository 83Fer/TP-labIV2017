import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit {

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
