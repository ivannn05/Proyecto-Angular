import { Component } from '@angular/core';
import { AlternarFormsComponent } from "../alternar-forms/alternar-forms.component";
import { Usuario } from '../../usuario';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicioClientesService } from '../../servicio-clientes.service';
import { inject } from '@angular/core';
import { Timestamp } from "rxjs";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AlternarFormsComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // Corregido 'styleUrl' a 'styleUrls'
})
export class RegistroComponent {
  usuario: Usuario;
  fecha: Date = new Date(); // Fecha actual
  timestamp: number = this.fecha.getTime();

  crud = inject(ServicioClientesService);
  private apiUrl = 'http://localhost:8081/api/usuarios'; // URL del backend

  constructor(private http: HttpClient) {
    this.usuario = {
      nombre: '',
      apellidos: '',
      correo: '',
      direccion: '',
      contrasena: '',
      rol: '',
      fechaRegistro: this.timestamp 
    };
  }

  registroUsu(): void {
    console.log(this.usuario);
    this.crud.crearUsuario(this.usuario).subscribe(response => {
      console.log(response);
    });
  }
}
