import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Storage } from '@ionic/storage'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  uid = from(this.storage.get('userid'));
  constructor(private afAuth: AngularFireAuth, private storage : Storage) {
   }

   public login(email, password){
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(result => {
      this.afAuth.currentUser.then(user => {
        this.storage.set('userid', user.uid)
      }).catch(er=> {}) 
       return true;
    })
    .catch(error => {
      return false;
    });
  }

}
