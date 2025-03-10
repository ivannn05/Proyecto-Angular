import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  constructor(private router: Router) {}
  logout(): void {
    localStorage.removeItem('token');  // Eliminar el token de localStorage
    this.router.navigate(['login']);  // Redirigir al login
  }
    // Verifica si el usuario está autenticado
    isAuthenticated(): boolean {
      return localStorage.getItem('token') !== null;
    }
}
