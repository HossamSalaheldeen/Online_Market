import { Good } from './../interfaces/good';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  constructor(public fs: AngularFirestore, public as: AuthService) { }

  addToCart(data: Good) {
    return this.fs.collection(`user/${this.as.userId}/cart`).add(data);
  }

  getCart() {
    return this.fs.collection(`user/${this.as.userId}/cart`).snapshotChanges();
  }

  delete(id) {
    return this.fs.doc(`user/${this.as.userId}/cart/${id}`).delete();
  }

  save(id, amount) {
    return this.fs.doc(`user/${this.as.userId}/cart/${id}`).update( {
      amount
    });
  }
}
