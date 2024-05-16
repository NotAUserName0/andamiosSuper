import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  animations: [fadeInAnimation]
})
export class InicioComponent {

  constructor() {
    afterRender(() => {
      window.scrollTo(0, 0);
    })
  }

}
