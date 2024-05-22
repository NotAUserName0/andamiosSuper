import { afterRender, Component } from '@angular/core';
import { AndamiosService } from '../../andamios.service';
import { Carrusel } from '../../models/carrusel';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  slides:Carrusel[]

  constructor(private andamiosService:AndamiosService){
    afterRender(()=>{
      this.obtenerCarrusel()
    })
  }

  ngOnInit() {
    this.obtenerCarrusel()
  }

  obtenerCarrusel(){
    this.andamiosService.obtenerCarrusel().subscribe((data)=>{
      this.slides = data
      console.log(this.slides)
    })
  }

}
