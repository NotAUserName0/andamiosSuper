import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';
import { Archivo } from '../../models/archivo';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  file:File
  archivo:Archivo

  constructor(private accionesService:ApiService){
    this.obtenerArchivo()
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  obtenerArchivo(){
    this.accionesService.obtenerArchivo('clientes').subscribe((data:Archivo) => {
      this.archivo = data
    })
  }

  subir() {
    if (this.file) {
      const formData = new FormData();

      formData.append(this.file.name, this.file, this.file.name);
      formData.append('origen', 'clientes');

      this.accionesService.subirArchivo(formData).subscribe((data) => {
        Swal.fire({
          title: 'PDF subido',
          text: 'Los cambios se han realizado con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.file = null
          window.location.reload()
        })
      }, err => {
        Swal.fire({
          title: 'No se han realizado cambios',
          text: err,
          icon: 'info',
          confirmButtonText: 'Aceptar'
        })
      })

    } else {
      Swal.fire({
        title: 'No hay un archivo seleccionado',
        text: 'Necesitas seleccionar una opcion',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }
}
