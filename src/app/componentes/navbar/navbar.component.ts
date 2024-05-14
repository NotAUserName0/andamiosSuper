import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user:any
  iconoActual:string = "menu"

  constructor(private router:Router, private tokenService:JwtService, private jwtService:JwtService) {
    this.user = tokenService.obtenerClaims()
  }


  cerrarSesion(){
    this.tokenService.deleteToken()
    Swal.fire({
      title:"Adiós..!",
      timer:3000,
      timerProgressBar: true,
      text:"Entraras al Login automaticamente",
      confirmButtonColor:"#B30000",
      confirmButtonText:"Salir"
    }).then(()=>{
      this.jwtService.deleteToken()
      this.router.navigate(['/login'])
    })
  }

  mostrarMenu(){

    if(this.iconoActual == 'close'){
      this.iconoActual = 'menu'
    }else if(this.iconoActual == 'menu'){
      this.iconoActual = 'close'
    }

    document.getElementById("contenido").classList.toggle("show")
  }

}
