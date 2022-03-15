import { Routes } from '@angular/router';
//import { AuthGuard } from './keycloak/auth.guard';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, 
     
    {
        path: 'gestion-employes',
        loadChildren: './gestion-employes/gestion-employes.module#GestionEmployesModule'
    },
    {
        path: 'gestion-bons',
        loadChildren: './gestion-bons/gestion-bons.module#GestionBonsModule'
    },
    {
      path: 'gestion-factures',
      loadChildren: './gestion-factures/gestion-factures.module#GestionFacturesModule'
  },
  {
    path: 'gestion-prestataires',
    loadChildren: './gestion-prestataires/gestion-prestataires.module#GestionPrestatairesModule'
},
{
  path: 'gestion-prestations',
  loadChildren: './gestion-prestations/gestion-prestations.module#GestionPrestationsModule'
},
{
  path: 'remboursements',
  loadChildren: './remboursements/remboursements.module#RemboursementsModule'
},
{
  path: 'utilisateur',
  loadChildren: './utilisateur/utilisateur.module#UtilisateurModule'
},
   {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]}
];
