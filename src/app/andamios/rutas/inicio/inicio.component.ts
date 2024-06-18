import { afterRender, Component } from '@angular/core';
import { AndamiosService } from '../../andamios.service';
import { Carrusel } from '../../models/carrusel';
import { fromEvent } from 'rxjs';
import { PetitionsService } from '../../../petitions.service';
import { Anuncio } from '../../models/anuncio';
import { SpinnerComponent } from '../../../spinner/spinner.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  slides: Carrusel[]
  anuncio: Anuncio
  elementos: any
  actual: number
  slide: string;
  private resizeSubscription: any;
  imgResponsive: boolean = false;
  loading: boolean = false

  constructor(private andamiosService: AndamiosService, private petitionsService: PetitionsService) {

      this.loading = true;
      this.obtenerCarrusel()
      this.obtenerAnuncio()
      this.obtenerInicio()
      afterRender(() => {
        window.scrollTo(0, 0)
        this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
          if (window.innerWidth < 749) {
            this.imgResponsive = true
          } else {
            this.imgResponsive = false
          }
        });

        if (window.innerWidth < 749) {
          this.imgResponsive = true
        } else {
          this.imgResponsive = false
        }

      })
  }

  ngAfterViewInit() {

  }

  obtenerCarrusel() {
    this.andamiosService.obtenerCarrusel().subscribe((data) => {
      /*data.forEach((element: Carrusel) => {
        element.file = this.petitionsService.sanitizar(element.file)
        element.fileResponsive = this.petitionsService.sanitizar(element.fileResponsive)
      })*/
      this.slides = data;
    })
  }

  obtenerAnuncio() {
    this.andamiosService.obtenerAnuncio().subscribe((data) => {
      this.anuncio = data
    })
  }

  obtenerInicio() {
    this.andamiosService.obtenerInicio().subscribe((data: any[]) => {

      for (let i = 0; i < data.length; i++) {
        data[i].banner = this.petitionsService.sanitizar(data[i].banner)
        for (let j = 0; j < data[i].secciones.length; j++) {
          data[i].secciones[j].imagen_inicio = this.petitionsService.sanitizar(data[i].secciones[j].imagen_inicio)
        }
      }

      this.elementos = data;
      this.loading = false;
    })
  }


}
