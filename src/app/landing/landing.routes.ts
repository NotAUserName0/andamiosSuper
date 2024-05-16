import { Routes } from "@angular/router";
import { LandingComponent } from "./landing.component";
import { InicioComponent } from "./rutas/inicio/inicio.component";
import { AboutComponent } from "./rutas/about/about.component";
import { ProveeedoresComponent } from "./rutas/proveeedores/proveeedores.component";

export const routes : Routes = [
  { path: '', component: LandingComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'quienes-somos', component: AboutComponent},
    { path: 'proveedores/:seccion', component: ProveeedoresComponent }
  ]}
]



