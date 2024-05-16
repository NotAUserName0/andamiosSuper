import { afterRender, Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  standalone: true,
  imports: [MatIcon, RouterLinkActive, RouterLink],
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.css']
})
export class NavbarLandingComponent {

  navbar:boolean = false
  iconoActual: string = 'menu';
  responsive = false
  private resizeSubscription: any;
  rOpen:boolean = false

  constructor(){
    afterRender(() => {
      if(window.innerWidth < 999){
        this.responsive = true
      }else{
        this.responsive = false
      }

      this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
        if(window.innerWidth < 999){
          this.responsive = true
        }else{
          this.responsive = false
        }
      });
    })
  }

  mostrarMenu(){

    if(this.responsive){
      if(this.iconoActual == 'close'){
        this.iconoActual = 'menu'
      }else if(this.iconoActual == 'menu'){
        this.iconoActual = 'close'
      }

      document.getElementById('menu')?.classList.toggle('menu-activation')
      this.rOpen = false
    }
  }

  openProb(){
    this.rOpen = !this.rOpen
  }

}
