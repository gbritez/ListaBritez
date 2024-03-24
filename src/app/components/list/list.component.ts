import { Component, Input } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  mostrarLista = true;
  @Input() items: Array<Alumno> | undefined;
}
