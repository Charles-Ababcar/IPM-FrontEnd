import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterPrestatairesComponent } from './ajouter-prestataires/ajouter-prestataires.component';
import { ListePrestatairesComponent } from './liste-prestataires/liste-prestataires.component';

export const PrestatairesRoutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'Ajouterprestataires',
      component: AjouterPrestatairesComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'Listeprestataires',
      component: ListePrestatairesComponent
    }]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(Prestatairesroutes)],
//   exports: [RouterModule]
// })
// export class GestionPrestatairesRoutingModule { }
