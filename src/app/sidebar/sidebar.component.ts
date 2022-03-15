import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import PerfectScrollbar from 'perfect-scrollbar';
import { Employe } from 'src/app/Models/Employe';
import { EmployeService } from 'src/app/Services/employe.service';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    

    {
        path: '/gestion-employes',
        title: 'Gestion Employes',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'gestionemployes',
        children: [
            {path: 'rechercheEmploye', title: 'RechercheEmploye', ab:'RE'},
            {path: 'carnetEmploye', title: 'CarnetEmploye', ab:'CE'},
            {path: 'AjouterEmployes', title: 'Ajouter Employes', ab:'AE'},
            {path: 'ListeEmployes', title: 'Carnets', ab:'CE'},
            
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
        ]
    },
    {
        path: '/gestion-bons',
        title: 'Bons',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'gestionbons',
        children: [
            {path: 'Ajouterbons', title: 'Ajouter Bons', ab:'AB'},
            {path: 'Listebons', title: 'Bon de Pharmacie', ab:'LB'},
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
            {path:'BonLettre',title:'Bon Lettre de Garantie',ab:'BG'},
            {path:'BonLunetterie',title:'Bon Lunetterie ',ab:'BL'},
            {path:'BonConsultation',title:'Bon de Consultation',ab:'BC'},
        ]
    },
    {
        path: '/gestion-factures',
        title: 'Factures',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'gestionfactures',
        children: [
            {path: 'Ajouterfactures', title: 'Ajouter Factures', ab:'AF'},
           // {path: 'Listebons', title: 'Liste Bons', ab:'LB'},
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
        ]
    },
    {
        path: '/gestion-prestataires',
        title: 'Prestataires',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'gestionprestataires',
        children: [
            {path: 'Ajouterprestataires', title: 'Ajouter Prestataires', ab:'AP'},
            {path: 'Listeprestataires', title: 'Listes Prestataires', ab:'LP'},
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
        ]
    },

    {
        path: '/gestion-prestations',
        title: 'Prestations',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'gestionprestations',
        children: [
            {path: 'AjoutPrestation', title: 'Ajouter Prestations', ab:'AP'},
            {path: 'ListPrestation', title: 'Liste Prestations', ab:'LP'},
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
        ]
    },
    {
        path: '/remboursements',
        title: 'Remboursement',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'remboursements',
        children: [
            {path: 'AjoutRemboursement', title: 'Ajouter Remboursement', ab:'AR'},
            // {path: 'ListPrestation', title: 'Liste Prestations', ab:'LP'},
            
        ]
    },

    // {
    //     path: '/utilisateur',
    //     title: 'utilisateur',
    //     type: 'sub',
    //     icontype: 'content_paste',
    //     collapse: 'utilisateur',
    //     children: [
    //         {path: 'Connexion', title: 'Connecter', ab:'C'},
           
            
    //     ]
    // },
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    username:string;
    email:string;
    public menuItems: any[];
    ps: any;

  constructor(private keycloak:KeycloakService) {
    this.keycloak.loadUserProfile().then(res => {

        this.username = res.firstName+" "+res.lastName
        this.email = res.email
           console.log(this.username,this.email);
       // this.userByEmail(this.email)

    });
   }
//   employe: Employe = new Employ e(0,"","","","",null,"","",null,"","","","","","","",null,null);
//   matricule:string;
//   reference:string;
//   message:Employe;
  

    // isMobileMenu() {
    //     if ($(window).width() > 991) {
    //         return false;
    //     }
    //     return true;
    // };
    deconnexion() {
        this.keycloak.logout();
        return this.keycloak.logout();
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
// // Recherche de l'employé a partir du formulaire d'ajout

// ///////////////------------------------//////////////////////

// public findByMatricule(){
    
//     this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
//       data=>{this.message = data;
//    //     console.log(this.message.idemp);
//       if(this.message){
//         this.showNotification('top','center',1,'<b>agent existe</b> :')
//         console.log(this.message);
//       }
//     else if(!this.message){
//         console.log("not existe");
//         this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
//       }
//     }
//       );
    
    
    
//   }
//   showNotification(from: any, align: any, idtype:any,note ) {
//     const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

//     //const color = Math.floor((Math.random() * 6) + 1);

//     $.notify({
//         icon: 'notifications',
//         message: note
//     }, {
//         type: type[idtype],
//         timer: 2000,
//         placement: {
//             from: from,
//             align: align
//         },
//         template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
//           '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
//           '<i class="material-icons" data-notify="icon">notifications</i> ' +
//           '<span data-notify="title">{1}</span> ' +
//           '<span data-notify="message">{2}</span>' +
//           '<div class="progress" data-notify="progressbar">' +
//             '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//           '</div>' +
//           '<a href="{3}" target="{4}" data-notify="url"></a>' +
//         '</div>'
//     });
// }
    
}
