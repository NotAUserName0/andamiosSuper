import { Routes } from "@angular/router";
import { AndamiosComponent } from "./andamios.component";
import { InicioComponent } from "./rutas/inicio/inicio.component";
import { ContactoComponent } from "./rutas/contacto/contacto.component";
import { CategoriasComponent } from "./rutas/categorias/categorias.component";

export const routes : Routes = [
  { path:'', component: AndamiosComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'categoria/:url', component:CategoriasComponent },
    { path: 'contacto', component: ContactoComponent }
  ]}
]

