import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>
  userId : string;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.user;
   }

  signup(email, password) {
   return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
