import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UtilisateurRoutes } from './utilisateur-routing.module';


@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UtilisateurRoutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule   
  ]
})
export class UtilisateurModule { }
