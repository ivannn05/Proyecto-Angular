import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlternarFormsComponent } from '../alternar-forms/alternar-forms.component';
import { ServicioClientesService } from '../../servicio-clientes.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Usuario } from '../../usuario';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AlternarFormsComponent],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  crud = inject(ServicioClientesService);
  userName: string = '';
  userPassword: string = ''; 
  rol:string='';
  

  private apiUrl = 'http://localhost:8081/api/usuarios'; // URL del backend

  constructor(private http: HttpClient, private router: Router) {}

  loginUsuario() {
    this.crud.loginUsuario(this.userName, this.userPassword).subscribe({
        next: (response) => {
           
            this.crud.getUsuarioPorCorreo(this.userName).subscribe(user => {
              this.crud.usuario = user;
              this.rol=user.rol??'';
              console.log("Respuesta del backend:", response+this.crud.usuario);
              console.log(user.rol);
              
              if (this.rol === 'Administrador') {
                localStorage.setItem('token', response); 
                localStorage.setItem('role', 'Administrador');  // Guardar el rol como 'admin'
            
                console.log("Login exitoso: Rol de admin."); // Log para el admin
                this.router.navigate(['/login']); // Redirigir a menú de admin
              } else if (this.rol === 'Usuario') {
                localStorage.setItem('token', response);
                localStorage.setItem('role', 'Usuario');  // Guardar el rol como 'usuario'
              
                console.log("Login exitoso: Rol de usuario."); // Log para el usuario
                this.router.navigate(['/inicio']); // Redirigir a menú de usuario
              } else {
              
                console.log("Error: Credenciales incorrectas."); // Log si las credenciales son incorrectas
              }
            })

            
        },
        error: (error) => {
            console.error("Error en el login:", error);
        }
    });
}
}
