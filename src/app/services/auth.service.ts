import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://app-portfolio0027.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  public getUsuarioById(id: number): Observable<LoginUsuario>{
    return this.httpClient.get<LoginUsuario>(this.authURL + 'detail/' + id);
 }

 public getEducaciones(): Observable<LoginUsuario[]>{
  return this.httpClient.get<LoginUsuario[]>(this.authURL + 'lista');
}

public getUsuarioByName(nombre: string): Observable<NuevoUsuario>{
  return this.httpClient.get<NuevoUsuario>(this.authURL + 'detailname/' + nombre);
}
}