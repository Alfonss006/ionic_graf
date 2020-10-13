import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NotasService } from '../services/notas.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  
  notaForm: FormGroup = this.formBuilder.group({
    titulo : new FormControl("",[Validators.required, Validators.minLength(3)]),
    desc: new FormControl("", [Validators.required, Validators.minLength(5)])
  });
  userid: string;
  notes;
  
  constructor(public afDB : AngularFireDatabase,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private _notas : NotasService,
              private _user: UserService) { }

  ngOnInit() {

    this._user.uid.subscribe(res => {
      this._notas.getNotas(res).valueChanges().subscribe(res => {
        this.notes = res;
        console.log(res); 
      })
    })

  }

  async setNota(){
    const uid = await this.storage.get('userid')
    this.afDB.database.ref(uid+ "/nota/"+ Date.now() ).set(this.notaForm.value);
    this.notaForm.setValue({titulo: "", desc: ""})
  }
}
