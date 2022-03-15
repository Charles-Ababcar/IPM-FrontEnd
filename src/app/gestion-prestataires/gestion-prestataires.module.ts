import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestatairesRoutes } from './gestion-prestataires-routing.module';
import { AjouterPrestatairesComponent } from './ajouter-prestataires/ajouter-prestataires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListePrestatairesComponent } from './liste-prestataires/liste-prestataires.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AjouterPrestatairesComponent, ListePrestatairesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PrestatairesRoutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule   
  ]
})
export class GestionPrestatairesModule { }



