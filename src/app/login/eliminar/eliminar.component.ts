import { Component, inject } from '@angular/core';
import { AlternarFormsComponent } from "../alternar-forms/alternar-forms.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicioClientesService } from '../../servicio-clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AlternarFormsComponent],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  crud = inject(ServicioClientesService);
    userCorreo: string = '';

  
    
  
    private apiUrl = 'http://localhost:8081/api/usuarios'; // URL del backend
  
    constructor(private http: HttpClient) {}
  
    eliminarUsuario(): void {
      //const usuario: Partial<Usuario> = { correo, contrasena };
      this.crud.eliminarUsuario(this.userCorreo).subscribe(response => {
        console.log(response);
        
      });;
    }
}
