import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { UsuarioService } from '../../servicios/webService/usuario.service';
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
  idUsuario: number = 0;
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
  datosUsuarios : Array<any>;
  usuario : Array<any>;

  //Filtro
  filtroTipo: string;

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
     
    

  constructor(public datosApiUsuario : UsuarioService) {
    
      //this.TraerTodosLosUsuarios();  
    
   }

  ngOnInit() {
  }

  //Eventos
  @Input()
    set Mostrar(vista:any){
      console.log(vista);
      this.mostrar = vista;
    }

    //Alta de Usuarios
    BtnAgregarUsuario(){

      if(!this.ValidaCampos())
      {
        this.showModal();
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
              usuario.tipo = this.tipo;

              
              console.log(usuario);

              this.datosApiUsuario.AgregarUsuario(usuario);

              this.showModal();
              this.titulo = "Alta!!";
              this.leyenda = "Se ingreso correctamente el Usuario!!";
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
              var usuario : Usuario = new Usuario();

              usuario.nomApell = this.nomApell;
              usuario.telefono = this.telefono;
              usuario.email = this.email;
              usuario.clave = this.clave;
              usuario.sexo = this.sexo;
              // usuario.fecIngreso = this.FechaIngreso();
              // usuario.foto = this.foto;
              usuario.direccion = this.direccion;
              usuario.localidad = this.localidad;
              usuario.tipo = this.tipo;

              console.log("El numero es:" + this.idUsuario);
              this.datosApiUsuario.ActualizaUsuario(this.idUsuario, usuario);

              this.showModal2();
              this.titulo = "Modifica!!";
              this.leyenda = "Se actualizo correctamente el Usuario!!";
              
              var temp=this;
              setTimeout(function(){
                  temp.TraerTodosLosUsuarios();
              }, 500);  
              
      
        } catch (error) {
            this.showModal2();
            this.titulo = "Error!!";
            this.leyenda = error;
        }
      }

    }

    //Baja de Usuario
    BtnBajaUsuario(){
      this.datosApiUsuario.BorraUsuario(this.idUsuario);
      this.onHidden3();
      var temp=this;
      setTimeout(function(){
          temp.TraerTodosLosUsuarios();
      }, 500);

    } 

    BorrarUsuario(id:number){
      this.idUsuario = id;
      this.showModal3();
      this.titulo = "Atencion!!";
      this.leyenda = "Esta seguro que desea dar de baja al usuario !!";
    }

    //Trae todos los usuarios
    TraerTodosLosUsuarios(){
        if(this.filtroTipo == "")
          this.filtroTipo = "Todos";
          
        this.datosApiUsuario.TraerTodosLosUsuarios(this.filtroTipo)
          .then(datos => {
          
            this.datosUsuarios = datos;
        }).catch( error => {
          console.log(error);
        });
    }

    // Modifica Usuarios
    ModificarUsuario(id:number){

      this.idUsuario = id;
      
      console.log(id);
        this.datosApiUsuario.TraerUnUsuario(id)
            .then(datos => {
            
              this.usuario = datos;
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

    Refrescar(){
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

      if(this.usuario != null)
      {
        this.usuario.forEach(element => {
          //this.idUsuario = element.id;
          this.nomApell = element.nomApell;
          this.telefono = element.telefono; 
          this.email = element.email;
          this.clave = element.clave;
          this.clave2 = element.clave;
          this.sexo = element.sexo;  
          this.foto = element.foto; 
          this.direccion = element.direccion;
          this.localidad = element.localidad;
          this.tipo = element.tipo;  
        });
        
      }
    }

      
  

}
