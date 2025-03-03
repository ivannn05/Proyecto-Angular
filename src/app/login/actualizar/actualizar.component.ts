import { Component, inject } from '@angular/core';
import { AlternarFormsComponent } from "../alternar-forms/alternar-forms.component";
import { Usuario } from '../../usuario';
import { ServicioClientesService } from '../../servicio-clientes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AlternarFormsComponent],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {
  usuario: Usuario;

  fecha: Date = new Date(); // Fecha actual
  timestamp: number = this.fecha.getTime();

  constructor(private http: HttpClient) {
    this.usuario = {
      id: 0,
      nombre: '',
      apellidos: '',
      correo: '',
      direccion: '',
      contrasena: '',
      rol: '',
      fechaRegistro: this.timestamp,
    };
  }

  crud = inject(ServicioClientesService);
  private apiUrl = 'http://localhost:8081/api/usuarios'; // URL del backend

  // 🔹 Buscar usuario por correo antes de actualizar
  buscarPorCorreo(): void {
    this.crud.getUsuarioPorCorreo(this.usuario.correo).subscribe({
      next: (usuarios: Usuario[]) => {
        if (usuarios.length > 0) {
          this.usuario = usuarios[0]; // Asignar el primer usuario encontrado
          console.log('✅ Usuario encontrado:', this.usuario);
        } else {
          console.error('⚠️ Usuario no encontrado con correo:', this.usuario.correo);
        }
      },
      error: (error) => {
        console.error('❌ Error al obtener usuario por correo:', error);
      }
    });
  }

  // 🔹 Método para actualizar el usuario
  actualizarUsu(): void {
    if (!this.usuario.id || this.usuario.id === 0) {
      console.error('⚠️ Error: El usuario no tiene un ID válido, no se puede actualizar.');
      return;
    }

    this.crud.actualizarUsuario(this.usuario).subscribe({
      next: (response) => console.log('✅ Usuario actualizado:', response),
      error: (error) => console.error('❌ Error al actualizar:', error)
    });
  }
}
