import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm : FormGroup;
  constructor(public afDB : AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private formBuilder: FormBuilder ,
              private storage : Storage) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      email : new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)])
    }) 
  }

  creaCuenta() {
    this.afAuth.createUserWithEmailAndPassword(this.registroForm.get('email').value , this.registroForm.get('password').value)
    .then((res) => this.afAuth.currentUser.then(user => {
                    this.storage.set('userid', user.uid)
    }).catch(er=> {}) 
  );
  }
  
  signOut() {
    this.afAuth.signOut();
  }

}
