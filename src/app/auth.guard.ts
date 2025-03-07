import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const router = inject(Router);
  // Verificar si el usuario está autenticado y tiene el rol de admin
  
  if (token && role === 'Administrador') {
    return true;  // Permitir el acceso
  }

  // Si no es admin, redirigir a la página de inicio
  router.navigate(['/inicio']);  // Puedes cambiar esta ruta si deseas redirigir a otro lugar
  return false;
  
};
