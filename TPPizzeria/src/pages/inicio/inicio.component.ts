import { Component, OnInit } from '@angular/core';

//Tipo de marcador
interface marcador{
  nombre: string;
  lat: number;
  lng: number;
  arrastable:boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  promo1:string= '/assets/images/promo-img-1.jpg';
  promo2:string= '/assets/images/promo-img-2.jpg';
  promo3:string= '/assets/images/promo-img-3.jpg';

  slide1:string= '/assets/images/slide-bg-1.jpg';
  slide2:string= '/assets/images/slide-bg-2.jpg';
  slide3:string= '/assets/images/slide-bg-3.jpg';

  about1:string= '/assets/images/about-img-1.jpg';
  about2:string= '/assets/images/about-img-2.jpg';
  about3:string= '/assets/images/about-img-3.jpg';

  menu1:string= '/assets/images/menu-img-1.jpg';

   zoom: number = 11;
  
  //posicion inicial
  lat: number =  -34.6601800;
  lng: number =  -58.3674400; 

  //marcadores
  marcadores: marcador[] = [
    {
      nombre: "Sucursal de Bernal",
      lat: -34.7167,
      lng: -58.3,
      arrastable: true
    },
    {
      nombre: "Sucursal de Avellaneda",
      lat: -34.6601800,
      lng: -58.3674400,
      arrastable: true
    },
    {
      nombre: "Sucursal de Sarandi",
      lat: -34.6667,
      lng: -58.3333,
      arrastable: false
    }
  ]
 

  constructor() { }

  ngOnInit() {
  }

}
