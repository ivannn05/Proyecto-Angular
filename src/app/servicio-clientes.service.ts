import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {

  private apiUrl = 'http://localhost:8081/api/usuarios';
  usuario!: Usuario;

  constructor(private http: HttpClient) {}

  // Configurar cabeceras aquí 🔹
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/todos`);
  }
  getUsuarioPorCorreo(correo: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/buscar`, correo, {
        headers: { 'Content-Type': 'text/plain' }
    });
}



  crearUsuario(usuario: Usuario): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/crearUsu`, usuario, { responseType: 'text' as 'json' });
  }

  actualizarUsuario(usuario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/actualizar`, usuario, { responseType: 'text' as 'json' });
  }

  eliminarUsuario(correo: string): Observable<string> {
    return this.http.request<string>('delete', `${this.apiUrl}/eliminar`, { 
      body: { correo}, 
      responseType: 'text' as 'json' 
    });
  }

  loginUsuario(correo: string, contrasena: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login`, { correo, contrasena }, { responseType: 'text' as 'json' });
  }
}
