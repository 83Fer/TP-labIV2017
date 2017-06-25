import { Injectable } from '@angular/core';

//WebService
import { UsuarioService } from '../../servicios/webService/usuario/usuario.service';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Usuario } from "clases/usuario";

@Injectable()
export class AuthService {

  usariosLista: Observable<firebase.User>;
  
  constructor( private firebaseAuth: AngularFireAuth, public datosApiUsuario : UsuarioService) {
    this.usariosLista = firebaseAuth.authState;
   }

   Registrarse(usuario: Usuario):boolean{
     this.firebaseAuth
     .auth
     .createUserWithEmailAndPassword(usuario.email, usuario.clave)
     .then(value =>{
       console.log("Correcto SignUp", value);
       this.datosApiUsuario.AgregarUsuario(usuario);
     })
     .catch(error => {
       console.log("error en SignUp:", error.message);
       return false;
     });
     return true;
   }

   Login(email:string, clave:string):boolean{
      this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, clave)
      .then(value =>{
        console.log("Esta Logueado");
      })
      .catch(error =>{
        console.log("Error de Login:", error.message );
        return false;
      });

      return true;
   }

   Logout(){
     this.firebaseAuth
     .auth
     .signOut();
   }

}
