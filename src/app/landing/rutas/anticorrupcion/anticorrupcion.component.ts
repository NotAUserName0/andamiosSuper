import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'app-anticorrupcion',
  standalone: true,
  imports: [],
  templateUrl: './anticorrupcion.component.html',
  styleUrls: ['./anticorrupcion.component.css'],
  animations: [fadeInAnimation]
})
export class AnticorrupcionComponent {

  constructor(private seo:SeoService) {
    afterRender(() => {
      window.scroll(0, 0);
    })
    this.seo.actualizarTitulo('Aviso de anticorrupción')
    this.seo.generateTags({
      title: 'Aviso de anticorrupción',
      description: 'Conoce las politicas de anticorrupción de Andamios Atlas',
      slug: 'Aviso de anticorrupción'
    })
  }

}
