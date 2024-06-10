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

      afterRender(async () => {
        window.scrollTo(0, 0)
        await this.obtenerCarrusel()
        await this.obtenerAnuncio()
        await this.obtenerInicio()
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
      this.slides = data

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].file = this.petitionsService.sanitizar(this.slides[i].file)
        this.slides[i].fileResponsive = this.petitionsService.sanitizar(this.slides[i].fileResponsive)
      }

      /*this.actual = 0
      this.slide = this.slides[this.actual]?.file*/
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
      console.log(this.elementos)
    })
  }


}
