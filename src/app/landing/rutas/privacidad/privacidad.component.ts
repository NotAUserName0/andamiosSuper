import { afterRender, Component } from '@angular/core';
import { SeoService } from '../../../seo.service';
import { fadeInAnimation } from '../../../fadeIn';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports:[],
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css'],
  animations: [fadeInAnimation]
})
export class PrivacidadComponent {

  constructor(private seo:SeoService){
    afterRender(()=>{
      window.scrollTo(0,0)
    })
    this.seo.actualizarTitulo('Aviso de privacidad')
    this.seo.generateTags({
      title: 'Politicas de privacidad',
      description: 'Conoce las politicas de privacidad de Andamios Atlas',
      slug: 'Politicas de privacidad'
    })
  }

}
