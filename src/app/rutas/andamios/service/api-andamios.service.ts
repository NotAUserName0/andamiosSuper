import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from '../../../models/andamios/carrusel';
import { Anuncio } from '../../../models/andamios/anuncio';

@Injectable({
  providedIn: 'root'
})
export class ApiAndamiosService {

  private URL = 'http://localhost:3000/andamios/'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  //CARRUSEL
  obtenerCarrusel():Observable<Carrusel[]>{
    return this.http.get<Carrusel[]>(`${this.URL}obtenerCarrusel`)
  }

  borrarCarrusel(id: number){
    return this.http.delete(`${this.URL}eliminarCarrusel/${id}`)
  }

  agregarCarrusel(carrusel: FormData){
    return this.http.post(`${this.URL}agregarCarrusel`, carrusel)
  }

  modificarCarrusel(carrusel: FormData){
    return this.http.put(`${this.URL}modificarCarrusel`, carrusel)
  }

  //ANUNCIO
  obtenerAnuncio():Observable<Anuncio>{
    return this.http.get<Anuncio>(`${this.URL}obtenerAnuncio`)
  }

  agregarAnuncio(anuncio){
    return this.http.post(`${this.URL}agregarAnuncio`, anuncio, this.httpOptions)
  }

  modificarAnuncio(anuncio){
    return this.http.put(`${this.URL}modificarAnuncio`, anuncio, this.httpOptions)
  }


}
