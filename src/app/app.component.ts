import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad7_victoria';

  // Declaro un array para meter ciudades a la lista
  cities: any[] = [];

  // Función que reciba la información del formulario y se añadan los datos en el array
  addNewCity(city:any) {
    this.cities.push(city)
  }

  // Función que borra la caja de la ciudad
  deleteCity(city:any) {
    this.cities = this.cities.filter(item => item !== city)
  }
}
