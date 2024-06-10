import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from './models/carrusel';
import { Anuncio } from './models/anuncio';

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

  obtenerAnuncio():Observable<Anuncio>{
    return this.http.get<Anuncio>(`${this.URL}obtenerAnuncio`)
  }

  obtenerInicio(){
    return this.http.get(`${this.URL}obtenerInicio/andamios`)
  }
}
