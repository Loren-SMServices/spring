import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 


@Injectable({ 
  providedIn: 'root' 
}) 

export class MiservicioService { 
  private apiUrl = 'http://localhost:8080/test/envio'; 

  constructor(private http: HttpClient) {} 

  // Obtener mensaje desde el backend 
  obtenerMensaje(): Observable<any> { 
    return this.http.get<any>(this.apiUrl); 
  } 

  // Enviar mensaje al backend 
  enviarMensaje(mensaje: string): Observable<string> { 
    return this.http.post(this.apiUrl, mensaje, { responseType: 'text' }); 
  } 

} 
