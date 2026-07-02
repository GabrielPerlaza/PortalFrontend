import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Articulo } from '../models/articulo.model';
import { ResponseApi } from '../models/response-api.model';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {
    private readonly apiUrl = `${environment.endpoint}/api/Articulo`;

   private http = inject(HttpClient)

  lista(): Observable<ResponseApi<Articulo[]>> {
  return this.http.get<ResponseApi<Articulo[]>>(
    `${this.apiUrl}/Lista`
  );
}

  obtener(id: string): Observable<ResponseApi<Articulo>> {
    return this.http.get<ResponseApi<Articulo>>(
      `${this.apiUrl}/${id}`
    );
  }

  crear(modelo: Articulo): Observable<ResponseApi<Articulo>> {
    return this.http.post<ResponseApi<Articulo>>(
      `${this.apiUrl}/Guardar`,
      modelo
    );
  }

  editar(modelo: Articulo): Observable<ResponseApi<Articulo>> {
    return this.http.put<ResponseApi<Articulo>>(
      `${this.apiUrl}/Editar`,
      modelo
    );
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/Eliminar/${id}`
    );
  }

  subirImagen(archivo: File): Observable<ResponseApi<string>> {
    const formData = new FormData();
    formData.append('archivo', archivo);

    return this.http.post<ResponseApi<string>>(
        `${this.apiUrl}/SubirImagen`,
        formData
    );
}
  
}
