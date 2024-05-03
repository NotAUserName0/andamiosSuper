import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Anuncio } from '../../../models/andamios/anuncio';
import { ApiAndamiosService } from '../service/api-andamios.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-anuncio',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './anuncio.component.html',
  styleUrl: './anuncio.component.css'
})
export class AnuncioComponent {
  isChecked: boolean = false
  form: FormGroup
  anuncio: Anuncio

  constructor(private fb: FormBuilder, private accionesService: ApiAndamiosService) {
    this.form = fb.group({
      id: [''],
      text: ['', Validators.required],
      hasBtn: [false],
      btnText: [''],
      url: ['/']
    })
  }

  ngOnInit() {
    this.show()
  }

  checkValue(value) {
    this.isChecked = !this.isChecked
    if (!this.isChecked) {
      this.form.get('btnText').setValue('')
      this.form.get('url').setValue('/')
    }
  }

  show() {
    this.accionesService.obtenerAnuncio().subscribe(res => {
      this.anuncio = res
    })
  }

  update() {

    Swal.fire({
      title: '¿Estas seguro?',
      text: '¿Deseas actualizar el anuncio?',
      icon: 'question',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#B30000',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.form.valid) {
          if(this.anuncio?.id){ //si existe se modifica
            if(this.anuncio != null) this.form.get('id')?.setValue(this.anuncio.id)
              let forms = JSON.stringify(this.form.value)
              this.accionesService.modificarAnuncio(forms).subscribe((res) => {
                Swal.fire({
                  title: 'Actualizado',
                  confirmButtonColor: '#B30000',
                  icon: 'success',
                }).then(() => {
                  window.location.reload()
                  this.isChecked = false
                  this.form.reset()
                  this.form.get('url').setValue('/')
                })
              }, error => {
                Swal.fire({
                  title: 'Ocurrio un error',
                  text: error.error.error,
                  confirmButtonColor: '#B30000',
                  icon: 'error',
                })
              })
          }else{
            let forms = JSON.stringify(this.form.value)
              this.accionesService.agregarAnuncio(forms).subscribe((res) => {
                Swal.fire({
                  title: 'Agregado',
                  confirmButtonColor: '#B30000',
                  icon: 'success',
                }).then(() => {
                  window.location.reload()
                  this.isChecked = false
                  this.form.reset()
                  this.form.get('url').setValue('/')
                })
              }, error => {
                Swal.fire({
                  title: 'Ocurrio un error',
                  text: error.error.error,
                  confirmButtonColor: '#B30000',
                  icon: 'error',
                })
              })
          }
        } else {
          Swal.fire({
            title: 'Completa el formulario',
            confirmButtonColor: '#B30000',
            icon: 'error',
          })
        }
      }
    })

  }

  goBack() {
    window.history.back();
  }

}
