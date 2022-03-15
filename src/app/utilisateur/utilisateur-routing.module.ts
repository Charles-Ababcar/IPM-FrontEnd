import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateurModule } from './utilisateur.module';

export const UtilisateurRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'Connexion',
      component: ConnexionComponent
    }]
  },
];

