import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(solicitud: HttpRequest<unknown>, siguiente: HttpHandler): Observable<HttpEvent<unknown>> {
    return siguiente.handle(solicitud).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensajeDeError = '¡Ocurrió un error desconocido!';
        if (error.error instanceof ErrorEvent) {
          // Errores del lado del cliente
          mensajeDeError = `Error: ${error.error.message}`;
        } else {
          // Errores del lado del servidor
          mensajeDeError = `Código de error: ${error.status}\nMensaje: ${error.message}`;
        }
        window.alert(mensajeDeError);
        return throwError(mensajeDeError);
      })
    );
  }
}
