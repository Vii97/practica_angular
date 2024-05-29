import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // Importo Input para recibir la lista del componente padre
  @Input() listInput: any;
  // Importo Output para pasar la información de la lista (hijo) al componente app (padre)
  @Output() listOutput = new EventEmitter<any>();



  // Variable que indica que la ciudad no ha sido visitada
  visited: boolean = false;

  // Función que indica si una ciudad está visitada o no visitada
  onVisit() {
    this.visited = !this.visited
  }

  // Función para eliminar un elemento de la lista
  onDelete() {
    this.listOutput.emit(this.listInput)
  }






}
