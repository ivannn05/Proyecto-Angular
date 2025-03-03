import { NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arboles',
  standalone: true,
  imports: [NgFor,SlicePipe],
  templateUrl: './arboles.component.html',
  styleUrl: './arboles.component.css'
})
export class ArbolesComponent {

  productosArboles = [
    { nombre: 'Bonsai 1', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 2', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 3', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 4', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 5', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 6', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 7', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 8', imagen: '/imagenes/Bogambilla.jpg' },
    { nombre: 'Bonsai 9', imagen: '/imagenes/Bogambilla.jpg' }
  ];
}
