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

  

  private apiUrl = 'http://localhost:8081/api/usuarios'; // URL del backend

  constructor(private http: HttpClient) {}

  loginUsuario() {
    this.crud.loginUsuario(this.userName, this.userPassword).subscribe({
        next: (response) => {
            console.log("Respuesta del backend:", response);
        },
        error: (error) => {
            console.error("Error en el login:", error);
        }
    });
}
}
