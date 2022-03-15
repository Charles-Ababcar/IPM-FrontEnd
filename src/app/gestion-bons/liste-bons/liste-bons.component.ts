import { DOCUMENT, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
import { IPM_Bon_Pharmaceutique } from 'src/app/Models/IPM_Bon_Pharmaceutique';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonPharmacieService } from 'src/app/Services/bon-pharmacie.service';
import { BonService } from 'src/app/Services/bon.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
declare var $:any
@Component({
  selector: 'app-liste-bons',
  templateUrl: './liste-bons.component.html',
  styleUrls: ['./liste-bons.component.css']
})
export class ListeBonsComponent implements OnInit {
  public tableData: TableData;
 employes : Array<any>=[];
 prestataire:Prestataire[];
 conjoints : Array<any>=[];
  nom_conjoint:string;
  prenom_conjoint:string;
 //////////////////////-----Recuperation Conjoints/////////////////////
 conjoint: Conjoint= new Conjoint(0,"","",null,null,"","");
 ide : number;
 addPrestataire :Prestataire;
 currentprestataire=new Prestataire(0,"","","","","","","","");
 enfant: Enfant= new Enfant(0,"","",null,"","",null);
  currentemploye: Employe = new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,null,"");
  matricule:string;
  reference:string;
  message:any;
  
  employe: Employe[];
  enfants : Array<any>=[];
  id : number;
  bonss : any;
  iden:number;
  idp : number;
  today= new Date();
  jstoday = '';
  bons: Array<any>=[];
  b:IPM_Bon=new IPM_Bon(0,"","",null,null,null);
  bon:IPM_Bon_Pharmaceutique=new IPM_Bon_Pharmaceutique(0,"",null,"",null,null,"",0,null,null)
  constructor(private emp_service:EmployeService,private router: Router,
    private route : ActivatedRoute,private pres_service:PrestataireService,
    private bonpharma:BonPharmacieService,private bont:BonService,  
        private conj_service:ConjointService,private enf_service:EnfantService,) { 
      this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }

  ngOnInit(): void {
    this.b.ipm_employe=this.currentemploye;
    this.b.ipm_prestataire=this.currentprestataire;
    this.bont.listeBon().subscribe(
     
      bonsss => {
        console.log(bonsss);
        this.bons = bonsss;
        console.log(this.bons)
      }
    );
     //lister les conjoints en fonction de leur employe
     this.ide=this.route.snapshot.params['id'];
     this.conj_service.listeConjoint(this.ide).subscribe(
      conjs => {
         console.log(conjs);
        this.conjoints = conjs;
       // this.bonss=this.conjoints;
        console.log(this.conjoints)
      });
      
        //lister les enfants en fonction de leur employe
        this.iden=this.route.snapshot.params['id'];
        this.enf_service.listeEnfant(this.iden).subscribe(
         enfs => {
            console.log(enfs);
           this.enfants = enfs;
           console.log(this.enfants)
         });
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
    this.idp=this.route.snapshot.params['id'];
      this.pres_service.getPrestataireById(this.idp).subscribe(result=>
       {
         this.currentprestataire=result;
         
       } );
    this.getPrestat();
    
  }
  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(result=>
      {
        this.currentemploye=result;  
        this.router.navigate(['/gestion-bons/Ajouterbons/'+employe.idemp]);
             
    });   
  }
  getPrestBy(prestataire){
    this.pres_service.getPrestataireById(prestataire.idpres).subscribe(result=>
     {
       this.currentprestataire=result;
       this.router.navigate(['/gestion-bons/Ajouterbons/'+prestataire.idpres]);
     } );
  }
  ///////////////////Recuperer les prestataires
  public getPrestat(){
    this.pres_service.getAllPestataires().subscribe(
      pres => {
       // console.log(cat);
        this.prestataire = pres;
       // console.log(this.categorie)
      }
    )
  }

  public findByMatricule(){
    
    this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data=>{this.message = data;
   //     console.log(this.message.idemp);
      if(this.message){
        this.showNotification('top','center',1,'<b>agent existe</b> :')
        console.log(this.message);
      }
    else if(!this.message){
        console.log("not existe");
        this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
      }
    }
      );
    
    
    
  }
  showNotification(from: any, align: any, idtype:any,note ) {
    const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

    //const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
        icon: 'notifications',
        message: note
    }, {
        type: type[idtype],
        timer: 2000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
public BonNow(){
  this.bon.ipm_employe=this.currentemploye;
  this.bon.ipm_prestataire=this.currentprestataire;
  this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(
    (data)=>this.message=data);
  //console.log(this.employe);
   this.router.navigate(['/gestion-bons/Listebons']);
}
/////////////////////////
upload(){
  var imgData = '/assets/img_poste/laposte.png'
   let doc=new jsPDF();
  // let col=[["Quantite","Designation","Prix unitaire","Total",]]
  // let rows=[]
  // for(let bon of this.bons)
  // {
  //   if(this.bon.ipm_employe==this.message.idemp){
  //     let tmp=[bon.quantite,bon.designation,bon.prix_unitaire,bon.total]
  //     rows.push(tmp)
  //   }
  //   // let tmp=[bon.quantite,bon.designation,bon.prix_unitaire,bon.total]
  //   // rows.push(tmp)
  // }
  // autoTable(doc,{
  //   startY:75,
  //   head:col,
  //   body:rows,
    
  // });
  // this.bon.ipm_employe=this.currentemploye;
   doc.addImage(imgData ,'JPEG',15,5,25,25)
  // doc.setFontSize(20)
  // doc.text("",72,46)
  // doc.text("Bon Pharmacie",75,50)
  //  const date=new Date()
  //     doc.setFontSize(10)
  //      doc.text("Dakar,le:",166,5)
  //  doc.text(date.toLocaleDateString("fr-FR"),185,5)
  //     doc.text("Nom:",15,45)
  //     doc.text(this.message.nom,83,35)
  //     doc.text("Prenom:",15,52)
  //     doc.text(this.message.prenom,83,45)
  //     doc.text("Matricule:",15,49)
  //     doc.text(this.message.matricule,40,52)
  //     doc.text("Services:",15,66)
  //     doc.text(this.message.ipm_service?.type_service,40,52)
  //     doc.text("Nombre d'article:",15,66)
  //     doc.text(this.bon.nombre_article,40,52)
  // doc.save("bonpharmacie.pdf");
  let data = document.getElementById('ModalDeRecu'); 
  const printContents = document.getElementById('ModalDeRecu').innerHTML;
     const originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
}
