import { afterRender, Component } from '@angular/core';
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
  imagen:any

  constructor(private fb: FormBuilder, private accionesService: ApiService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.division = params['division'];
      this.obtenerSucursales();
    })
  }

  obtenerSucursales(){
    this.accionesService.obtenerSucursales(this.division).subscribe((data:Sucursal[]) => {
      this.sucursales = data;
        this.obtenerImagen();
    })
  }

  deleteSucursal(element){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#B30000',
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
          timer: 2000,
          showConfirmButton: false
        })
      }
    })
  }

  showForm(elemento){
    this.form = true;
    let sucursal = {
      id: elemento.id,
      nombre: elemento.nombre,
      direccion: elemento.direccion,
      telefono: elemento.telefono,
      maps: elemento.maps,
      division: this.division
    }
    this.sucursal = sucursal;
  }

  obtenerImagen(){
    let imagen = {
      main: true
    }
    this.accionesService.obtenerImagenSucursal(JSON.stringify(imagen)).subscribe((data:any) => {
      this.imagen = data[0];
    })

  }

  agregarImagen(){
    const input = document.createElement('input')
    input.type = 'file'

    input.onchange = () => {
      const file = input.files[0]
      const formData = new FormData()
      const main = true;
      formData.append(file.name, file, file.name)
      formData.append("main",main.toString())

      this.accionesService.agregarImagenSucursal(formData).subscribe(()=>{
        Swal.fire({
          title:'Agregada con exito!',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000
        }).then(()=>{
          this.obtenerImagen()
        })
      },error=>{
        Swal.fire({
          title: 'Error al agregar imagen',
          text: error,
          icon:'warning',
        })
      })
    }

    input.click()
  }

  modificarImagen(){
    const input = document.createElement('input')
    input.type = 'file'

    input.onchange = () => {
      const file = input.files[0]
      const formData = new FormData()
      formData.append("id",this.imagen.id)
      formData.append(file.name, file, file.name)
      formData.append("main",this.imagen.main.toString())

      this.accionesService.modificarImagenSucursal(formData).subscribe(()=>{
        Swal.fire({
          title:'Modificada con exito!',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000
        }).then(()=>{
          this.obtenerImagen()
        })
      },error=>{
        Swal.fire({
          title: 'Error al modificar imagen',
          text: error,
          icon:'warning',
        })
      })
    }

    input.click()

  }

  agregar(){
    this.form = true;
    this.sucursal = new Sucursal();
    this.sucursal.division = this.division;
  }

  closeForm(){
      this.form = false;
      this.obtenerSucursales();
  }

  goBack() {
    window.history.back();
  }

}
