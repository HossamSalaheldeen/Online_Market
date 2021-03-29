import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fs: AngularFirestore) { }

  addNewUser(id, name, address) {
    return this.fs.doc('user/' + id).set({
      name,
      address
    })
  }
}
