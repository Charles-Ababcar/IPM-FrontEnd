import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutPrestationComponent } from './ajout-prestation/ajout-prestation.component';
import { ListPrestationComponent } from './list-prestation/list-prestation.component';

export const PrestationRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'AjoutPrestation',
      component: AjoutPrestationComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'ListPrestation',
      component: ListPrestationComponent
    }]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class GestionPrestationsRoutingModule { }
