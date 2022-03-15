import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemboursementsRoutingModule } from './remboursements-routing.module';
import { AjoutRemboursementComponent } from './ajout-remboursement/ajout-remboursement.component';


@NgModule({
  declarations: [AjoutRemboursementComponent],
  imports: [
    CommonModule,
    RemboursementsRoutingModule
  ]
})
export class RemboursementsModule { }
