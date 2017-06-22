import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from "ngx-bootstrap/modal";

//Firebase
import { AngularFireDatabase, FirebaseListObservable, 
  FirebaseObjectObservable } from 'angularfire2/database';

  //Web service
import { PizzaService } from "servicios/webService/pizza/pizza.service";
import { Pizza } from "clases/pizza";


@Component({
  selector: 'app-abm-pizzas',
  templateUrl: './abm-pizzas.component.html',
  styleUrls: ['./abm-pizzas.component.css']
})
export class AbmPizzasComponent implements OnInit {

  pizzasList : FirebaseListObservable<any>;

  vistaPizza : string = "Grilla";

  //Vistas
  modal: string;
  mostrar:string;

  //Modal
  titulo:string;
  leyenda:string;

  //Variables
  idPizza: number = 0;
  nombre : string = "";
  precio: number = 0; 
  descuento: number = 0;
  foto: string = "";
  estado: string = "";  
  // fecIngreso;
  listaPizzas : Array<any>;
  pizza : Array<any>;

  //Ultimo id para firebase
  ultimoId:string;
  idM :number = 0;
  

  //Filtro
  filtroEstado: string;

  //Modal
    @ViewChild('autoShownModal')
    public autoShownModal:ModalDirective;
    public autoShownModal2:ModalDirective;
    public modificaModal:ModalDirective;
    public autoShownModal3:ModalDirective;
    public isModalShown:boolean = false;
    public isModalShown2:boolean = false;
    public isModalShown3:boolean = false;
    public isModalModif:boolean = false;
     

     pizzaListFire:  FirebaseListObservable<any>;
     pizzaObjectFire: FirebaseObjectObservable<any>;
  

  constructor( public datosApiPizza : PizzaService, public db: AngularFireDatabase ) {
        //Trae Lista de Firebase
        this.pizzaListFire = db.list('/pizza');
        console.log(this.pizzaListFire);
        

        //Traer ultimo id para guardar en firebase
        this.datosApiPizza.TraerUltimoIdPizza()
        .then(datos => {

          this.ultimoId = datos[0]["idPizza"];
          console.log("Aca lta:" + datos[0]["idPizza"]);
             
        }).catch( error => {
          console.log(error);
        });

        
   }

  ngOnInit() {
  }

  //Alta de Usuarios
    BtnAgregarPizza(){

      if(!this.ValidaCampos())
      {
        this.showModal();
      }
      else
      {
        try {

              console.log("LLgo aca");

              var pizza : Pizza = new Pizza();

              pizza.nombre = this.nombre;
              pizza.precio = this.precio;
              pizza.descuento = this.descuento;
              pizza.foto = "menu-1.jpg";
              pizza.estado = "Alta";
              
              
              console.log(pizza);

              this.datosApiPizza.AgregarPizza(pizza);

              //Agrego a Firebase
              if(this.idM == 0)
                this.idM = parseInt(this.ultimoId);

              this.pizzaListFire.push({
                idPizza: this.idM += 1,
                nombre: this.nombre,
                precio: this.precio,
                descuento: this.descuento,
                estado: "Alta",
                foto: this.foto
              });

              this.showModal();
              this.titulo = "Alta!!";
              this.leyenda = "Se ingreso correctamente la Pizza!!";
              this.Refrescar();
      
        } catch (error) {
            this.showModal();
            this.titulo = "Error!!";
            this.leyenda = error;
        }

      }
      
    }

    //Actualiza Usuarios
    BtnActualizar(){
      if(!this.ValidaCampos())
      {
        this.showModal();
      }
      else
      {
        try {
              var pizza : Pizza = new Pizza();

              pizza.nombre = this.nombre;
              pizza.precio = this.precio;
              pizza.descuento = this.descuento;
              pizza.foto = this.foto;
              pizza.estado = "Alta";

              console.log("El numero es:" + this.idPizza);
              this.datosApiPizza.ActualizaPizza(this.idPizza, pizza);

              //Actualizo en Firebase
              
              try {
                var ref : any;

               this.pizzaListFire.subscribe(valor => { valor.forEach(v =>{
                  if(v.idPizza == this.idPizza)
                  {
                    ref = v.$key;
                    console.info("v.nombre" + v.$key);
                    
                    console.info("v.nombre1" + v.idPizza);
                  }
                })

              });
              
              var temp=this;
              setTimeout(function(){
                  temp.pizzaListFire.update(ref, {
                    nombre: temp.nombre,
                    precio: temp.precio,
                    descuento: temp.descuento,
                    foto: temp.foto
                  })
              }, 500); 

                //ref = this.db.database.ref("/pizza").orderByChild("idPizza").equalTo(this.idPizza);
                
                //this.pizzaListFire.$ref.orderByChild("idPizza").equalTo(this.idPizza.toString()));
                // this.db.object('/pizza/' + pizza.idPizza).$ref.transaction(currentvalue=> {
                //   console.log("Aquie "+ currentvalue);
                //     if(currentvalue !== null){
                //       return  {
                    
                //         nombre: this.nombre,
                //         precio: this.precio,
                //         descuento: this.descuento,
                //         estado: this.estado,
                //         foto: this.foto
                //       };
                  
                //     }else{
                //       console.log('NO se pudo');
                //       return Promise.reject(Error('No existe el id'))
                //     }
                //   })
                //   .then( result => {
                //     // Good to go, user does not exist
                //     if (result.committed) {
                //         // TODO: Take additional action
                //     }
                //   })
                //   .catch( error => {
                //     // handle error
                //   });
  
              } catch (error) {
                
              } 

              this.showModal2();
              this.titulo = "Modifica!!";
              this.leyenda = "Se actualizo correctamente la Pizza!!";
              
              var temp=this;
              setTimeout(function(){
                  temp.TraerTodasLasPizzas();
              }, 500);  
              
      
        } catch (error) {
            this.showModal2();
            this.titulo = "Error!!";
            this.leyenda = error;
        }
      }

    }

    //Baja de Usuario
    BtnBajaPizza(){
      //Web Service
      this.datosApiPizza.BorraPizza(this.idPizza);

      //Firebase
      var ref : any;

      this.pizzaListFire.subscribe(valor => { valor.forEach(v =>{
          if(v.idPizza == this.idPizza)
          {
            ref = v.$key;
            console.info("v.nombre" + v.$key);
            
            console.info("v.nombre1" + v.idPizza);
          }
        })

      });
      
      var temp=this;
      setTimeout(function(){
          temp.pizzaListFire.update(ref, {
            estado: "Baja"
          })
      }, 500); 

      this.onHidden3();
      var temp=this;
      setTimeout(function(){
          temp.TraerTodasLasPizzas();
      }, 500);

    } 

    BorrarPizza(id:number){
      this.idPizza = id;
      this.showModal3();
      this.titulo = "Atencion!!";
      this.leyenda = "Esta seguro que desea dar de baja la Pizza !!";
    }

    //Trae todos los usuarios
    TraerTodasLasPizzas(){
        if(this.filtroEstado == "")
          this.filtroEstado = "Todos";
          
        this.datosApiPizza.TraerTodasLasPizzas(this.filtroEstado)
          .then(datos => {
          
            this.listaPizzas = datos;
        }).catch( error => {
          console.log(error);
        });
    }

    // Modifica Usuarios
    ModificarPizza(id:number){

      this.idPizza = id;
      
      console.log(id);
        this.datosApiPizza.TraerUnaPizza(id)
            .then(datos => {
            
              this.pizza = datos;
          }).catch( error => {
            console.log(error);
          });
          
          var temp=this;
          setTimeout(function(){
              temp.muestraModif();
              temp.Refrescar();
              //console.log(user1.nomApell);
          }, 500);         

    }

    //Validacion de campos
    ValidaCampos():boolean{

      this.titulo = "Atencion!!";
      this.leyenda = "Campos requeridos no ingresados";

      if(this.nombre == "")
          return false;

      if(this.precio == 0)
          return false;
      
      // if(this.descuento == 0)
      //     return false;

      if(this.foto == "")
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
      //Modal function 2
      public showModal2():void {
        this.isModalShown2 = true;
      }
    
      public hideModal2():void {
        this.autoShownModal2.hide();
      }
    
      public onHidden2():void {
        this.isModalShown2 = false;
      }
      //Modal function 3
      public showModal3():void {
        this.isModalShown3 = true;
      }
    
      public hideModal3():void {
        // this.autoShownModal3.hide();
        this.isModalShown3 = false;
      }
    
      public onHidden3():void {
        this.isModalShown3 = false;
      }
      //**************************** 
      //Modal function Modifica
      public muestraModif():void {
        this.isModalModif = true;
      }
    
      public cierraModal():void {
        this.modificaModal.hide();
      }
    
      public ocultaModif():void {
        this.isModalModif = false;
      }
      //**************************** 

    
  
    
    Refrescar(){
       //Variables
      this.nombre = "";
      this.precio = 0; 
      this.descuento = 0;
      this.foto = "";
      this.estado = "";

      if(this.pizza != null)
      {
        this.pizza.forEach(element => {

          this.nombre = element.nombre;
          this.precio = element.precio;
          this.descuento = element.descuento; 
          this.foto = element.foto;
          this.estado = element.estado; 
        });
        
      }
      
      
    }


}
