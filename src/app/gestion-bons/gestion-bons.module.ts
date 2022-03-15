import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonRoutes} from './gestion-bons-routing.module';
import { ListeBonsComponent } from './liste-bons/liste-bons.component';
import { AjoutBonsComponent } from './ajout-bons/ajout-bons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { BonLettreComponent } from './bon-lettre/bon-lettre.component';
import { BonLunetterieComponent } from './bon-lunetterie/bon-lunetterie.component';
import { BonConsultationComponent } from './bon-consultation/bon-consultation.component';


@NgModule({
  declarations: [ListeBonsComponent, AjoutBonsComponent, BonLettreComponent, BonLunetterieComponent, BonConsultationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BonRoutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule
  ]
})
export class GestionBonsModule { }
