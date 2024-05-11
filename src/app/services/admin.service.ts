import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/admin/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL = "http://localhost:3000/admin/"

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  login(usuario){
    return this.http.post(`${this.URL}login`, usuario, this.httpOptions)
  }

  verificarToken(){
    return this.http.get(`${this.URL}verificarToken`)
  }

  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}obtenerUsuarios`)
  }

  crearUsuario(usuario:any):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.URL}crearUsuario`, usuario, this.httpOptions)
  }

  verificarPassword(usuario:any){
    return this.http.post(`${this.URL}verificarPassword`, usuario, this.httpOptions)
  }

  eliminarUsuario(id:number){
    return this.http.delete(`${this.URL}eliminarUsuario/${id}`)
  }

  modificarUsuario(usuario:any){
    return this.http.put(`${this.URL}modificarUsuario`, usuario, this.httpOptions)
  }

}
