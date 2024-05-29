import { Component, EventEmitter, Output } from '@angular/core';
import { IMes } from '../../interfaces/IMes';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  // Al ser Angular 17 importo FormsModule
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  // Creo una variable en base a la interfaz
  meses: IMes[] = [
    {
      name: "Enero",
      id: "enero"
    },
    {
      name: "Febrero",
      id: "febrero"
    },
    {
      name: "Marzo",
      id: "marzo"
    },
    {
      name: "Abril",
      id: "abril"
    },
    {
      name: "Mayo",
      id: "mayo"
    },
    {
      name: "Junio",
      id: "junio"
    },
    {
      name: "Julio",
      id: "julio"
    },
    {
      name: "Agosto",
      id: "agosto"
    },
    {
      name: "Septiembre",
      id: "septiembre"
    },
    {
      name: "Octubre",
      id: "octubre"
    },
    {
      name: "Noviembre",
      id: "noviembre"
    },
    {
      name: "Diciembre",
      id: "diciembre"
    }
  ]

  // Importo Output para pasar la información del formulario (hijo) al componente app (padre)
  @Output() formOutput = new EventEmitter<any>();


  // Hago un grupo de datos que recoge el formulario de ciudades
  cForm = this.fb.group({
    city: ["", [Validators.required]],
    country: ["", [Validators.required]],
    month: ["", Validators.required]
  });

  // Constructor del FormBuilder, un reactive form para hacer formularios
  constructor(private fb: FormBuilder) {
  }

  // Función para mandar los datos del formulario
  submit() {
    console.log(this.cForm.value);

    //Pasar al componente padre
    this.formOutput.emit(this.cForm.value)

    // Limpio los campos
    this.cForm.patchValue({
      city: "",
      country: "",
      month: ""
    })


  }

}
