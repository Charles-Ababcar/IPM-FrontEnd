import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterEmployesComponent } from './ajouter-employes/ajouter-employes.component';
import { CarnetEmployeComponent } from './carnet-employe/carnet-employe.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ModifierEmployesComponent } from './modifier-employes/modifier-employes.component';
import { RechercheEmployeComponent } from './recherche-employe/recherche-employe.component';
import { SupprimerEmployesComponent } from './supprimer-employes/supprimer-employes.component';

export const EmployeRoutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'rechercheEmploye',
      component: RechercheEmployeComponent
    }]
  },

  {
    path: '',
    children: [ {
      path: 'AjouterEmployes',
      component: AjouterEmployesComponent
    }]
  },

  {
      path: '',
      children: [ {
        path: 'ListeEmployes',
        component: ListeEmployesComponent
      }]
  },

  {
    path: '',
    children: [ {
      path: 'carnetEmploye/:id',
      component: CarnetEmployeComponent
    }]
},


  {
        path: '',
        children: [ {
          path: 'ModifierEmployes/:id',
          component: ModifierEmployesComponent
        }]
  },

  {
    path: '',
    children: [ {
      path: 'SupprimerEmployes',
      component: SupprimerEmployesComponent
    }]
},
];


