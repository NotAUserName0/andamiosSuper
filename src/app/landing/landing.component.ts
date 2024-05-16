import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLandingComponent } from './componentes/navbar-landing/navbar-landing.component';
import { FooterLandingComponent } from './componentes/footer-landing/footer-landing.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, NavbarLandingComponent, FooterLandingComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
