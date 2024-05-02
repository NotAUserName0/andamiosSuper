import { Routes } from "@angular/router";
import { SeccionesComponent } from "../Generales/secciones/secciones.component";
import { HomeAndamiosComponent } from "./home-andamios/home-andamios.component";
import { ContactoComponent } from "../Generales/contacto/contacto.component";
import { SolicitudesComponent } from "../Generales/solicitudes/solicitudes.component";
import { CarruselAndamiosComponent } from "./carrusel-andamios/carrusel-andamios.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeAndamiosComponent},
  { path: "secciones/:area", component:SeccionesComponent},
  { path: "contacto/:area", component: ContactoComponent },
  { path: "solicitudes/:division", component: SolicitudesComponent },
  { path: "carrusel", component:CarruselAndamiosComponent },
  { path: "**", redirectTo: "home"}
];
