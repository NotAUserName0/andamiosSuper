import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaSingle } from '../models/general/categoriaSingle';
import { Categoria } from '../models/general/navbar';
import { SeccionSingle } from '../models/general/seccionSingle';
import { SubseccionSingle } from '../models/general/subseccionSingle';
import { SolicitudContacto } from '../models/general/solicitud-contacto';
import { Solicitud } from '../models/general/solicitud';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = "http://localhost:3000/general"

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  obtenerNavbar(area:string):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.URL}/navbar/${area}`);
  }
  //CATEGORIA
  agregarCategoria(categoria:any){
    return this.http.post(`${this.URL}/crearCategoria`,categoria, this.httpOptions);
  }

  eliminarCategoria(id){
    return this.http.delete(`${this.URL}/eliminarCategoria/${id}`);
  }

  obtenerCategoria(id):Observable<CategoriaSingle>{
    return this.http.get<CategoriaSingle>(`${this.URL}/obtenerCategoria/${id}`);
  }

  modificarCategoria(categoria:any){
    return this.http.put(`${this.URL}/modificarCategoria`, categoria, this.httpOptions);
  }

  //SECCION
  agregarSeccion(seccion:FormData){
    return this.http.post(`${this.URL}/crearSeccion`,seccion);
  }

  agregarImagenesASeccion(data:FormData){
    return this.http.post(`${this.URL}/agregarImagenesASeccion`,data);
  }

  modificarImagenSeccion(data:FormData){
    return this.http.put(`${this.URL}/modificarImagenSeccion`,data);
  }

  eliminarImagenSeccion(id){
    return this.http.delete(`${this.URL}/eliminarImagenSeccion/${id}`);

  }

  agregarArchivoASeccion(data:FormData){
    return this.http.post(`${this.URL}/agregarArchivoASeccion`,data);
  }

  eliminarSeccion(id){
    return this.http.delete(`${this.URL}/eliminarSeccion/${id}`);
  }

  obtenerSeccion(id):Observable<SeccionSingle>{
    return this.http.get<SeccionSingle>(`${this.URL}/obtenerSeccion/${id}`);
  }

  modificarSeccion(data:FormData){
    return this.http.put(`${this.URL}/modificarSeccion`,data);
  }

  //SUBSECCION
  agregarSubseccion(subseccion:FormData){
    return this.http.post(`${this.URL}/crearSubseccion`,subseccion);
  }

  obtenerSubseccion(id):Observable<SubseccionSingle>{
    return this.http.get<SubseccionSingle>(`${this.URL}/obtenerSubseccion/${id}`);
  }

  agregarImagenesASubseccion(data:FormData){
    return this.http.post(`${this.URL}/agregarImagenesASubseccion`,data);
  }

  agregarArchivoASubseccion(data:FormData){
    return this.http.post(`${this.URL}/agregarArchivoASubseccion`,data);
  }

  eliminarSubseccion(id){
    return this.http.delete(`${this.URL}/eliminarSubseccion/${id}`);
  }

  modificarSubseccion(subseccion:FormData){
    return this.http.put(`${this.URL}/modificarSubseccion`,subseccion)
  }

  eliminarArchivoAsubseccion(id){
    return this.http.delete(`${this.URL}/eliminarArchivoSubseccion/${id}`)
  }

  modificarArchivoSubseccion(data:FormData){
    return this.http.put(`${this.URL}/modificarArchivoSubseccion`,data);
  }

  modificarImagenSubseccion(data:FormData){
    return this.http.put(`${this.URL}/modificarImagenSubseccion`,data);
  }

  eliminarImagenSubseccion(id){
    return this.http.delete(`${this.URL}/eliminarImagenSubseccion/${id}`);
  }

  //ARCHIVOS SECCIONES
  eliminarArchivoSeccion(id){
    return this.http.delete(`${this.URL}/eliminarArchivoSeccion/${id}`);
  }

  modificarArchivoSeccion(data:FormData){
    return this.http.put(`${this.URL}/modificarArchivoSeccion`,data);
  }


  ///////////////////////////////////////////////////////////////////////
  //CONTACTO
  obtenerSolicitudesContacto(area:string):Observable<SolicitudContacto[]>{
    return this.http.get<SolicitudContacto[]>(`${this.URL}/obtenerSolicitudesContacto/${area}`);
  }

  obtenerSolicitudContacto(id):Observable<SolicitudContacto>{
    return this.http.get<SolicitudContacto>(`${this.URL}/obtenerSolicitudContacto/${id}`);
  }

  eliminarSolicitudContacto(id){
    return this.http.delete(`${this.URL}/eliminarSolicitudContacto/${id}`);
  }

  //Solicitudes
  obtenerSolicitudes(area:string):Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${this.URL}/obtenerSolicitudes/${area}`);
  }

  eliminarSolicitud(id){
    return this.http.delete(`${this.URL}/eliminarSolicitud/${id}`);
  }
}
