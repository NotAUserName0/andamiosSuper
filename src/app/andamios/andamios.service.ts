import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from './models/carrusel';

@Injectable({
  providedIn: 'root'
})
export class AndamiosService {

  private URL = "http://localhost:3000/api/"

  constructor(private http:HttpClient) { }

  obtenerNavbar(){
    return this.http.get(`${this.URL}navbar/andamios`)
  }

  obtenerCarrusel():Observable<Carrusel[]>{
    return this.http.get<Carrusel[]>(`${this.URL}obtenerCarrusel`)
  }
}
