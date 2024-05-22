import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAndamiosComponent } from './componentes/navbar-andamios/navbar-andamios.component';

@Component({
  selector: 'app-andamios',
  standalone: true,
  imports: [RouterOutlet, NavbarAndamiosComponent],
  templateUrl: './andamios.component.html',
  styleUrl: './andamios.component.css'
})
export class AndamiosComponent {

}
