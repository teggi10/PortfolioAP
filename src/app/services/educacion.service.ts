import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://app-portfolio0027.herokuapp.com/educacion/';

  constructor(private http:HttpClient) { }

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + 'lista');
  }

 public getEducacion(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + 'detail/' + id);
 }

  public guardarEducacion(persona: Educacion): Observable<any>{
   return this.http.post(this.URL + 'create', persona);
 }

 public actualizarEducacion(id: number , persona: Educacion): Observable<any>{
  return this.http.put(this.URL + 'update/' + id, persona);
}

public borrarEducacion(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + 'delete/' + id);
}
}
