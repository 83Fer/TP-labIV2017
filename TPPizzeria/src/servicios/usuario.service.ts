import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';


import { Usuario } from '../clases/usuario';

@Injectable()
export class UsuarioService {

  constructor(public http:Http) { }

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
    
    this.http.post("http://localhost:8080/AppiPizza/public/index.php/usuario" , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  BorraUsuario(id:number)
  {

    this.http.delete("http://localhost:8080/AppiPizza/public/index.php/usuario/" + id)
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
    
      this.http.put("http://localhost:8080/AppiPizza/public/index.php/usuario/" + id , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

}
