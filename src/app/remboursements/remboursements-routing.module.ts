import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutRemboursementComponent } from './ajout-remboursement/ajout-remboursement.component';

const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'AjoutRemboursement',
      component: AjoutRemboursementComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemboursementsRoutingModule { }
