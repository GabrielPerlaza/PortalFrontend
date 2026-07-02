import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/login.model';
import { ResponseApi } from '../models/response-api.model';
import { Sesion } from '../models/sesion.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
     private readonly  apiUrl: string = `${environment.endpoint}/api/Auth`;

  private http = inject(HttpClient)


  login(modelo: Login): Observable<ResponseApi<Sesion>> {
    return this.http.post<ResponseApi<Sesion>>(
      `${this.apiUrl}/IniciarSesion`,
      modelo
    );
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }

  isLogged(): boolean {
    return localStorage.getItem('usuario') !== null;
  }
  
}
