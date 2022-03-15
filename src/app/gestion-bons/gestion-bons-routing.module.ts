import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutBonsComponent } from './ajout-bons/ajout-bons.component';
import { BonConsultationComponent } from './bon-consultation/bon-consultation.component';
import { BonLettreComponent } from './bon-lettre/bon-lettre.component';
import { BonLunetterieComponent } from './bon-lunetterie/bon-lunetterie.component';
import { ListeBonsComponent } from './liste-bons/liste-bons.component';




export const BonRoutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'Ajouterbons/:id',
      component: AjoutBonsComponent
    }]
  },

  {
      path: '',
      children: [ {
        path: 'Listebons',
        component: ListeBonsComponent
      }]
  },
  {
    path: '',
    children: [ {
      path: 'BonLettre',
      component: BonLettreComponent
    }]
},
{
  path: '',
  children: [ {
    path: 'BonConsultation',
    component: BonConsultationComponent
  }]
},
{
  path: '',
  children: [ {
    path: 'BonLunetterie',
    component: BonLunetterieComponent
  }]
},
  
];

