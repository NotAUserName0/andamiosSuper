import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { Sucursal } from '../../../models/general/sucursal';
import { MatIcon } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { title } from 'process';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-sucursales-andamios',
  standalone: true,
  imports: [MatIcon, MatTableModule, MatButtonModule, FormComponent],
  templateUrl: './sucursales-andamios.component.html',
  styleUrl: './sucursales-andamios.component.css'
})
export class SucursalesAndamiosComponent {

  sucursales:Sucursal[] = []
  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'telefono', 'maps', 'acciones'];
  division: string = ''
  form:boolean = false;
  sucursal:Sucursal

  constructor(private fb: FormBuilder, private accionesService: ApiService, private activatedroute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.division = params['division'];
      this.accionesService.obtenerSucursales(this.division).subscribe((data:Sucursal[]) => {
        this.sucursales = data;
      })
    })
  }

  deleteSucursal(element){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.accionesService.eliminarSucursal(element.id).subscribe(() => {
          this.accionesService.obtenerSucursales(this.division).subscribe((data:Sucursal[]) => {
            this.sucursales = data;
          })
        })
        Swal.fire({
          title: '¡Eliminado!',
          text: 'La sucursal ha sido eliminada.',
          icon: 'success',
          timer: 2000
        })
      }
    })
  }

  showForm(elemento){
    this.form = true;
    this.sucursal = elemento;
  }

}
