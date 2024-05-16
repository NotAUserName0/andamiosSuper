import { Routes } from '@angular/router';

export const routes: Routes = [
  /*{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: function() { return import('./landing/landing.routes').then(m => m.routes); }}*/
  {path:'' , children:[
    {path: '', loadChildren: () => import('./landing/landing.routes').then(m => m.routes)}
  ]}
];

