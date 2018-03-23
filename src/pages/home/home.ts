import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  testDevItem: FirebaseListObservable<any[]>;
  testItem ='';

  constructor(public navCtrl: NavController, public firebaseService: FirebaseService) {
    this.shoppingItems = this.firebaseService.getShoppingItems();
    this.testDevItem = this.firebaseService.getTestDevItem();
  }

  
  addItem() {
    this.firebaseService.addItem(this.newItem);
  }
  
  removeItem(id) {
    this.firebaseService.removeItem(id);
  }

  // partie de test Dev Item
  
  addTestItem(){
    this.firebaseService.addTestDevItem(this.testItem);
  }

  removeTestItem(id){
    this.firebaseService.removeTestDevItem(id);
  }
}
