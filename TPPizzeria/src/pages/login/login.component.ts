import { Component, OnInit } from '@angular/core';

//Firebase
// import { AngularFireDatabase, FirebaseListObservable, 
//   FirebaseObjectObservable } from 'angularfire2/database';
//   import { AngularFireAuth } from 'angularfire2/auth';
//   import * as firebase from 'firebase/app';
//   import { Observable } from "rxjs/Observable";

import { AuthService } from "app/providers/auth.service";

//WebService
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

  // usuariosList: FirebaseListObservable<any>;
  // user: Observable<firebase.User>;


  constructor(public datosApiUsuario : UsuarioService, public authService: AuthService) { 
      
  }

  ngOnInit() {
  }

  Login(tipo:string){

    if(this.ValidaCampos(tipo)){
      //Login con Firebase

      console.log("Llego a Login");
     if(this.authService.Login(this.email, this.clave))
     {
        this.email= this.clave = "";
     }
     else{
        this.titulo = "Atencion!!";
        this.leyenda = "No existe el usuario o la clave es incorrecta"; 
     }

      
    }
    else{
      this.titulo = "Atencion!!";
      this.leyenda = "Campos requeridos no ingresados";
    }

  }

  //Se registra solo el cliente
  Registrar(tipo:string){
    if(this.ValidaCampos(tipo))
      {
        try {
              // Reggistrar Cleinte
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

              //Regsitro en Firebase
              this.authService.Registrarse(this.email, this.clave);
              this.email = this.clave = '';

              
              this.titulo = "Registrado!!";
              this.leyenda = "Ustede se ha registrado con exito!!";
              // this.Refrescar();
      
        } catch (error) {
            
            this.titulo = "Error!!";
            this.leyenda = error;
        }
      }
      else{
        this.titulo = "Atencion!!";
        this.leyenda = "Campos requeridos no ingresados";
      }
      

  }

  //Limpiar informe

  LimpiaInfo(){
    this.titulo = "";
    this.leyenda = "";
  }

  
  //Validacion de campos
    ValidaCampos(tipo:string):boolean{

      if(tipo == "SignUp")
      {
        if(this.nomApell == "")
          return false;

        if(this.sexo == "")
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

      }

      if(tipo = "Login")
      {
        if(this.email == "")
            return false;
        
        if(this.clave == "")
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
