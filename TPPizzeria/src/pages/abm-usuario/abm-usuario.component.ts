import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { UsuarioService } from '../../servicios/usuario.service';
import { Http, HttpModule} from '@angular/http';

import { Usuario } from '../../clases/usuario';

//Bootstrap
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-abm-usuario',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit {

  //Vistas
  modal: string;
  mostrar:string;

  //Modal
  titulo:string;
  leyenda:string;

  //Variables
  nomApell : string = "";
  telefono: string = ""; 
  email: string = "";
  clave: string = "";
  sexo: string = "";  
  foto:string = ""; 
  direccion:string = "";
  localidad:string = "";
  tipo: string = "";
  clave2: string = "";
  // fecIngreso;

  //Modal
    @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
    public isModalShown:boolean = false;

  constructor(public datosApiUsuario : UsuarioService) { }

  ngOnInit() {
  }

  //Eventos
  @Input()
    set Mostrar(vista:any){
      console.log(vista);
      this.mostrar = vista;
    }

    //Alta de Usuarios
    AgregarUsuario()
    {
      if(!this.ValidaCampos())
      {
        this.showModal();
      }
      else
      {

        console.log("LLgo aca");

        var usuario : Usuario = new Usuario();

        usuario.nomApell = this.nomApell;
        usuario.telefono = this.telefono;
        usuario.email = this.email;
        usuario.clave = this.clave;
        usuario.sexo = this.sexo;
        usuario.fecIngreso = this.FechaIngreso();
        usuario.foto = this.foto;
        usuario.direccion = this.direccion;
        usuario.localidad = this.localidad;
        usuario.tipo = this.tipo;

        
        console.log(usuario);

        this.datosApiUsuario.AgregarUsuario(usuario);

        this.showModal();
        this.titulo = "Alta!!";
        this.leyenda = "Se ingreso correctamente el Usuario!!";
        this.Refrescar();

      }

      
    }

    //Validacion de campos
    ValidaCampos():boolean
    {
      this.titulo = "Atencion!!";
      this.leyenda = "Campos requeridos no ingresados";

      if(this.nomApell == "")
          return false;

      if(this.sexo == "")
          return false;
      
      if(this.telefono == "")
          return false;

      if(this.direccion == "")
          return false;

      if(this.localidad == "")
          return false;
      
      if(this.email == "")
          return false;
      
      if(this.clave == "" || this.clave2 == "")
        return false;
          
      if(this.clave != this.clave2)
      {
        this.leyenda = "Las claves no coinciden, vuelva intoducir la clave!!";
        this.clave = "";
        this.clave2 = "";
        return false;
      }

      if(this.tipo == "")
          return false;
      
      return true;
    }

    
  //Modal function
    public showModal():void {
      this.isModalShown = true;
    }
  
    public hideModal():void {
      this.autoShownModal.hide();
    }
  
    public onHidden():void {
      this.isModalShown = false;
    }
    //**************************** 

    FechaIngreso():string
    {
      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1; 
      var yyyy = hoy.getFullYear();
      var fecha:string;

       if(mm<10) {
        fecha= '0' + mm + "-";
      } 
      else
        fecha = mm + "-";

      if(dd<10) {
        fecha = fecha + '0'+ dd;
      } 
      else
        fecha = fecha + dd;

      fecha = yyyy + "-" + fecha;

      return fecha;
    }

    Refrescar()
    {
       //Variables
      this.nomApell = "";
      this.telefono = ""; 
      this.email = "";
      this.clave = "";
      this.sexo = "";  
      this.foto = ""; 
      this.direccion = "";
      this.localidad = "";
      this.tipo = "";
      this.clave2 = "";
    }

      
  

}
