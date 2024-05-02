import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private router:Router){
    //this.user = tokenService.obtenerClaims()
  }


  cerrarSesion(){
    localStorage.removeItem("token")
    Swal.fire({
      title:"Adiós..!",
      timer:3000,
      timerProgressBar: true,
      text:"Entraras al Login automaticamente",
      confirmButtonColor:"#B30000",
      confirmButtonText:"Salir"
    }).then(()=>{
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

  mostrarSubmenu(){
    console.log("clicked")
  }

}
