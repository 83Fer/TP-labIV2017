import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
