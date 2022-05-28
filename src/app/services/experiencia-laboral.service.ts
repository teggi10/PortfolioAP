import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../models/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  URL = 'https://app-portfolio0027.herokuapp.com/experienciaLaboral/';

  constructor(private http:HttpClient) { }

  public getExperienciasLaborales(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.URL + 'lista');
  }

 public getExperienciaLaboral(id: number): Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(this.URL + 'detail/' + id);
 }

  public guardarExperienciaLaboral(persona: ExperienciaLaboral): Observable<any>{
   return this.http.post(this.URL + 'create', persona);
 }

 public actualizarExperienciaLaboral(id: number , persona: ExperienciaLaboral): Observable<any>{
  return this.http.put(this.URL + 'update/' + id, persona);
}

public borrarExperienciaLaboral(id: number): Observable<any>{
  return this.http.delete<any>(this.URL + 'delete/' + id);
}
}
