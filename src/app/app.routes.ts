import { Routes } from '@angular/router';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { ProveedoresComponent } from './rutas/proveedores/proveedores.component';
import { ClientesComponent } from './rutas/clientes/clientes.component';

export const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'clientes', component: ClientesComponent },
  {path: 'andamios', loadChildren: function() { return import('./rutas/andamios/andamios.routes').then(m => m.routes); }},
  {path: 'conten', loadChildren: function() { return import('./rutas/conten/conten.routes').then(m => m.routes); }},
  //{path: '**', redirectTo: 'inicio'}
];
