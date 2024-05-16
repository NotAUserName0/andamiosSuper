import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInAnimation]
})
export class AboutComponent {

  constructor() {
    afterRender(() => {
      window.scrollTo(0, 0);
    })
  }
}
