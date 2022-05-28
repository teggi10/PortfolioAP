import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://app-portfolio0027.herokuapp.com/proyecto/';

  constructor(private http:HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'lista');
  }

 public getProyecto(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL + 'detail/' + id);
 }

  public guardarProyecto(proyecto: Proyecto): Observable<any>{
   return this.http.post(this.URL + 'create', proyecto);
 }

 public actualizarProyecto(id: number , proyecto: Proyecto): Observable<any>{
  return this.http.put(this.URL + 'update/' + id, proyecto);
}

public borrarProyecto(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + 'delete/' + id);
}
}
