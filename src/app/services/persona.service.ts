import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://app-portfolio0027.herokuapp.com/persona/';

  constructor(private http:HttpClient) { }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'lista');
  }

 public getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + 'detail/' + id);
 }

  public guardarPersona(persona: Persona): Observable<any>{
   return this.http.post(this.URL + 'create', persona);
 }

 public actualizarPersona(id: number , persona: Persona): Observable<any>{
  return this.http.put(this.URL + 'update/' + id, persona);
}

public borrarPersona(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + 'delete/' + id);
}
}
