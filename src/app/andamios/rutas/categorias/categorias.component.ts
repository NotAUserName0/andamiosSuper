import { Component } from '@angular/core';
import { AndamiosService } from '../../andamios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  //revisar la categoria y obtener su tipo
  tipo:string = ''

  constructor(private andmiosService: AndamiosService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {

      this.andmiosService.obtenerTipoCategoria(params['url']).subscribe((data:any) => {
        this.tipo = data.tipo
        console.log(data.id)
      })

    })
   }

}
