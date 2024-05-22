import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-landing',
  standalone: true,
  imports:[MatIcon],
  templateUrl: './footer-landing.component.html',
  styleUrls: ['./footer-landing.component.css']
})
export class FooterLandingComponent {

  constructor(private router:Router){}

  goToForm(){
    this.router.navigate(['unete-al-equipo'])
  }

}
