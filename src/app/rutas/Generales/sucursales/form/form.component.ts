import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Sucursal } from '../../../../models/general/sucursal';
import { fadeInAnimation } from '../../../../effects/fadeIn';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  animations:[fadeInAnimation]
})
export class FormComponent {

  @Input() sucursal:Sucursal;
  form:FormGroup

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      nombre:[''],
      direccion:[''],
      telefono:[''],
      maps:[''],
    })
  }

  ngOnChanges(){
    this.form.patchValue({
      nombre: this.sucursal.nombre,
      direccion: this.sucursal.direccion,
      telefono: this.sucursal.telefono,
      maps: this.sucursal.maps
    })
  }

}
