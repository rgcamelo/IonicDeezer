import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedordeezzerService {

  constructor(public http: HttpClient) {
    console.log('Dezzer conectado')
   }

  GetSongs(){
    return this.http.get('https://api.deezer.com/playlist/93489551')
  }
}
