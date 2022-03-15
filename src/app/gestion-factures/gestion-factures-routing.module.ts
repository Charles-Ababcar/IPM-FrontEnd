import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterFacturesComponent } from './ajouter-factures/ajouter-factures.component';

export const Factureroutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'Ajouterfactures',
      component:AjouterFacturesComponent
    }]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class GestionFacturesRoutingModule { }
