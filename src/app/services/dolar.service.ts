import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  date = new Date(Date.now());

  BaseURL = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/';
  apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f';
  constructor(private http: HttpClient) { }

  getDolar () :Observable<any> {
    return this.http.get(this.BaseURL+ 'periodo/'
    + this.date.getFullYear() +'/'
    + this.date.getMonth()+ '/dias_i/1/'
    + this.date.getFullYear() + '/'
    + this.date.getMonth()+ '/dias_f/'
    + this.date.getDate() + '?formato=json&apikey=' 
    + this.apiKey);
  }
}
