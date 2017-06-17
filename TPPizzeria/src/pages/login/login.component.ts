import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../servicios/webService/usuario.service';
import { Http, HttpModule} from '@angular/http';

import { Usuario } from '../../clases/usuario';

//Bootstrap
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  titulo:string = "";
  leyenda:string = "";

  //Variables
  idUsuario: number = 0;
  nomApell : string = "";
  telefono: string = ""; 
  email: string = "";
  clave: string = "";
  sexo: string = "";  
  direccion:string = "";
  localidad:string = "";
  clave2: string = "";
  
  usuario : Array<any>;

  
  constructor(public datosApiUsuario : UsuarioService) { }

  ngOnInit() {
  }

  //Se registra solo el cliente
  Registrar(){
    if(!this.ValidaCampos())
      {
        
      }
      else
      {
        try {

              console.log("LLgo aca");

              var usuario : Usuario = new Usuario();

              usuario.nomApell = this.nomApell;
              usuario.telefono = this.telefono;
              usuario.email = this.email;
              usuario.clave = this.clave;
              usuario.sexo = this.sexo;
              usuario.fecIngreso = this.FechaIngreso();
              usuario.foto = "avatar.jpg";
              usuario.direccion = this.direccion;
              usuario.localidad = this.localidad;
              usuario.estado = "Alta";
              usuario.tipo = "Cliente";
              
              
              console.log(usuario);

              this.datosApiUsuario.AgregarUsuario(usuario);

              
              this.titulo = "Registrado!!";
              this.leyenda = "Ustede se ha registrado con exito!!";
              // this.Refrescar();
      
        } catch (error) {
            
            this.titulo = "Error!!";
            this.leyenda = error;
        }



      }

  }

  
  //Validacion de campos
    ValidaCampos():boolean{

      this.titulo = "Atencion!!";
      this.leyenda = "Campos requeridos no ingresados";

      if(this.nomApell == "")
          return false;

      if(this.sexo == "")
          return false;
      
      // if(this.telefono == "")
      //     return false;

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
 
      return true;
    }

    FechaIngreso():string{
    
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

}
