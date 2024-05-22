import { Routes } from "@angular/router";
import { AndamiosComponent } from "./andamios.component";
import { InicioComponent } from "./rutas/inicio/inicio.component";
import { ContactoComponent } from "./rutas/contacto/contacto.component";

export const routes : Routes = [
  { path:'', component: AndamiosComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent }
  ]}
]

