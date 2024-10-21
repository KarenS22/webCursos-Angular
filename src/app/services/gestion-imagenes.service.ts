import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GestionImagenesService {

  constructor(private http: HttpClient) {
    // this.retornar()
  }


  // return this.http.get('https://jsonplaceholder.typicode.com/photos');
  retornar(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/');  // Retornar el Observable

  }



}
