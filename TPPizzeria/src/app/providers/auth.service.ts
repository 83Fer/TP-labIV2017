import { Injectable } from '@angular/core';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  usariosLista: Observable<firebase.User>;
  
  constructor( private firebaseAuth: AngularFireAuth) {
    this.usariosLista = firebaseAuth.authState;
   }

   Registrarse(email: string, clave: string):boolean{
     this.firebaseAuth
     .auth
     .createUserWithEmailAndPassword(email, clave)
     .then(value =>{
       console.log("Correcto SignUp", value);
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
