import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInAnimation]
})
export class AboutComponent {

  constructor(private seo:SeoService) {
    this.seo.actualizarTitulo("¿Quienes somos?");
      this.seo.generateTags({
        title: "¿Quienes somos?",
        description: "Somos una empresa orgullosamente mexicana, nos hemos consolidado como el líder en renta y venta de andamios en el mercado.",
        slug: "quienes-somos"
      })
    afterRender(() => {
      window.scrollTo(0, 0);

    })
  }
}
