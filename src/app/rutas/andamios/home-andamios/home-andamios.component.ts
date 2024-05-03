import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-home-andamios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-andamios.component.html',
  styleUrl: './home-andamios.component.css'
})
export class HomeAndamiosComponent {

  claims:any
  filtro:string=''
  utilities:boolean = false

  //agrega las utilidades para la pagina principal
  utilidades = [
    {icon:'contacto.svg', title:'Contacto', description:'Buzon de solicitudes de contacto', url:'contacto/andamios'},
    {icon: "cv.svg", title: "Solicitudes", description:"Muestra las solicitudes de empleo", url:"solicitudes/andamios"},
    {icon: "carrusel.svg", title: "Carrusel", description: "Modifica imágenes del carrusel", url:"carrusel"},
    {icon: "anuncio.svg", title: "Anuncio", description: "Modifica el anuncio principal", url:"anuncio"},
    {icon:'negocio.svg', title:'Sucursales', description:'Edita las sucursales ', url:'sucursales/andamios'},
    {icon:'proveedor.svg', title:'Proveedores', description:'PDF/Comunicados/Links', url:'proveedores'},
    {icon:'cliente.svg', title:'Clientes', description:'PDF/Links', url:'clientes'},
    {icon: 'pagina.svg', title: 'Página', description: 'Agrega secciones, categorias y subsecciones a tu pagina', url: 'secciones/andamios'},
  ]

  constructor() { }

  filtrarUtilidades() {

    this.utilities = false

    if (this.filtro.trim() === '') {
      return this.utilidades; // Si no hay filtro, mostrar todas las utilidades
    }

    const filtro = this.filtro.toLowerCase().trim();
    const utilidadesFiltradas = this.utilidades.filter(utilidad =>
      utilidad.icon.toLowerCase().includes(filtro) ||
      utilidad.description.toLowerCase().includes(filtro)
    );

    if (utilidadesFiltradas.length === 0) {
      //console.log("No se encontraron herramientas que coincidan con el filtro.");
      this.utilities = true
    }

    return utilidadesFiltradas;
  }
}
