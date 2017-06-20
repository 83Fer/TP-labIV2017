import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';


import { Usuario } from '../../../clases/usuario';

@Injectable()
export class UsuarioService {
  headers : Headers;
   options : any;

  constructor(public http:Http) {

    // this.headers = new Headers()
    // this.headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTc4OTg1NTEsImV4cCI6MTQ5NzkwNTc1MSwic3ViIjoiVVNFUiJ9.d3dcciMkNAo8FH6WPXMt82pLBXgD9l_Y7MSgc86oEJs");
    // this.options = new RequestOptions({headers: this.headers})
   }

  TraerTodosLosUsuarios(tipo: string)
  {
    
    let url = "http://localhost:8080/AppiPizza/public/index.php/usuario/" + tipo;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  ExtraerDatos(res: Response){
    return res.json() || "No ha datos";
  }

  ErrorExtraerDatos(res: Response){
    return "Error ";
  }

  // Agregar Usuario
 AgregarUsuario(usuario: Usuario) 
  { 
    
     let datos={
       nomApell :  usuario.nomApell ,
       telefono : usuario.telefono ,
       email : usuario.email ,
       clave : usuario.clave ,
       sexo : usuario.sexo ,
       fecIngreso : usuario.fecIngreso ,
       foto : usuario.foto ,
       direccion : usuario.direccion,
       localidad : usuario.localidad,
       estado : "Alta",
       tipo : usuario.tipo };
            
            console.log(datos);
    
   let url = "http://localhost:8080/AppiPizza/public/index.php/usuario";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  BorraUsuario(id:number)
  {

    let url = "http://localhost:8080/AppiPizza/public/index.php/usuario/" + id;
    this.http
             .delete(url)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)

  }

  TraerUnUsuario(id: number)
  {
    let url = "http://localhost:8080/AppiPizza/public/index.php/usuario/id/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  ActualizaUsuario(id:number, usuario: Usuario) 
  { 
    
     let datos={
       nomApell :  usuario.nomApell ,
       telefono : usuario.telefono ,
       email : usuario.email ,
       clave : usuario.clave ,
       sexo : usuario.sexo ,
      //  fecIngreso : usuario.fecIngreso ,
      //  foto : usuario.foto ,
       direccion : usuario.direccion,
       localidad : usuario.localidad,
      //  estado : "Alta",
       tipo : usuario.tipo };
            
            console.log(datos);
            console.log(" LLego Usuario");
      
      let url = "http://localhost:8080/AppiPizza/public/index.php/usuario/" + id;
      this.http
             .put(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  // //Registrar Cliente
  // RegistrarCliente(usuario: Usuario) 
  // { 
    
  //    let datos={
  //      nomApell :  usuario.nomApell ,
  //      telefono : usuario.telefono ,
  //      email : usuario.email ,
  //      clave : usuario.clave ,
  //      sexo : usuario.sexo ,
  //      fecIngreso : usuario.fecIngreso ,
  //      foto : usuario.foto ,
  //      direccion : usuario.direccion,
  //      localidad : usuario.localidad,
  //      estado : "Alta",
  //      tipo : usuario.tipo };
            
  //           console.log(datos);
    
  //  let url = "http://localhost:8080/AppiPizza/public/index.php/usuario/register";
  //   this.http
  //            .post(url , datos, this.options)
  //            .toPromise()
  //            .then()
  //            .catch(this.ErrorExtraerDatos)
  // }

}
