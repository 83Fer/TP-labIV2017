import { Component, OnInit } from '@angular/core';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, 
  FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-abm-pizzas',
  templateUrl: './abm-pizzas.component.html',
  styleUrls: ['./abm-pizzas.component.css']
})
export class AbmPizzasComponent implements OnInit {

  pizzasList : FirebaseListObservable<any>;

  constructor( db: AngularFireDatabase ) {
      this.pizzasList = db.list('/pizza');
        console.log(this.pizzasList);
   }

  ngOnInit() {
  }

}
