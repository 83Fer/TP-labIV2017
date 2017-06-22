import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';


import { Pizza } from '../../../clases/pizza';

@Injectable()
export class PizzaService {

  constructor(public http:Http) { }

  TraerTodasLasPizzas(estado: string)
  {
    console.log("llego aca");
    let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/" + estado;    
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
 AgregarPizza(pizza: Pizza) 
  { 
    
     let datos={
       nombre :  pizza.nombre ,
       precio : pizza.precio ,
       descuento : pizza.descuento ,
       estado : pizza.estado ,
       foto : pizza.foto
        };
            
            console.log(datos);
    
   let url = "http://localhost:8080/AppiPizza/public/index.php/pizza";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  BorraPizza(id:number)
  {

    let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/" + id;
    this.http
             .delete(url)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)

  }

  TraerUnaPizza(id: number)
  {
    let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/id/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  ActualizaPizza(id:number, pizza: Pizza) 
  { 
    
     let datos={
       nombre :  pizza.nombre ,
       precio : pizza.precio ,
       descuento : pizza.descuento ,
       estado : pizza.estado ,
       foto : pizza.foto 
       };
            
            console.log(datos);
            console.log(" LLego pizza");
      
      let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/" + id;
      this.http
             .put(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  TraerUltimoIdPizza()
  {
    let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  //Alta de Pizza
  AltaPizza(id:number, pizza: Pizza) 
  { 
    
     let datos={
      estado : pizza.estado };
            
            console.log(datos);
            console.log(" LLego pizza Put");
      
      let url = "http://localhost:8080/AppiPizza/public/index.php/pizza/alta/" + id;
      this.http
             .put(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }
  
}
