import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3002/contactos';

  constructor(private http: HttpClient) { }

  getContactos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getContacto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearContacto(contacto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contacto);
  }

  actualizarContacto(id: number, contacto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contacto);
  }

  eliminarContacto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
