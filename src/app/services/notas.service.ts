import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private storage: Storage, public afDB : AngularFireDatabase, private _user: UserService) {
  
   }

  public getNotas(id){
    
      return this.afDB.list(id +'/nota');
  }
}
