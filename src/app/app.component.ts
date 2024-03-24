import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ListaBritez';
  list: Alumno[] = [
    { nombre: "Juan", esRegular: true },
    { nombre: "María", esRegular: false },
    { nombre: "Carlos", esRegular: true },
    { nombre: "Ana", esRegular: false },
    { nombre: "Pedro", esRegular: true },
    { nombre: "Laura", esRegular: false },
    { nombre: "Pablo", esRegular: true },
    { nombre: "Sofía", esRegular: false },
    { nombre: "Diego", esRegular: true },
    { nombre: "Lucía", esRegular: false }
  ]
}
