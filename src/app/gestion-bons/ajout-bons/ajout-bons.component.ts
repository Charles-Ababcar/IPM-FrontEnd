import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { jsPDF } from 'jspdf';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Employe } from 'src/app/Models/Employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/Services/employe.service';
import { BonService } from 'src/app/Services/bon.service';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
import { IPM_Bon_Pharmaceutique } from 'src/app/Models/IPM_Bon_Pharmaceutique';
import { Conjoint } from 'src/app/Models/Conjoint';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { event } from 'jquery';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { Enfant } from 'src/app/Models/Enfant';
import { EnfantService } from 'src/app/Services/enfant.service';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonPharmacieService } from 'src/app/Services/bon-pharmacie.service';
import swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-ajout-bons',
  templateUrl: './ajout-bons.component.html',
  styleUrls: ['./ajout-bons.component.css']
})
export class AjoutBonsComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  currentemploye: Employe= new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,null,"");
  employe: Employe[];
  id : number;
  matricule:string;
  reference:string;
  radio:any=1;
  //////////////////////-----Recuperation Conjoints/////////////////////
  conjoint: Conjoint= new Conjoint(0,"","",null,null,"","");
  public tableData: TableData;
  conjoints : Array<any>=[];
  nom_conjoint:string;
  prenom_conjoint:string;
  ide : number;
  prestataire:Prestataire[];
  addPrestataire :Prestataire;
  currentprestataire=new Prestataire(0,"","","","","","","","");
 
    //////////////////////-----Fin Recuperation Conjoints/////////////////////
    /////Objets lister Enfants///////
  public tableDatas: TableData;
  iden:number;
  enfants : Array<any>=[];
  enfant: Enfant= new Enfant(0,"","",null,"","",null);
   //bon:any
   bon:IPM_Bon_Pharmaceutique=new IPM_Bon_Pharmaceutique(0,"",null,"",null,null,"",0,null,null)
   bonph:IPM_Bon_Pharmaceutique[];
   message: any;
   bonss : any;
    constructor(private emp_service:EmployeService, fb: FormBuilder,
       private router: Router,private bon_service:BonService,
      private conj_service:ConjointService,private enf_service:EnfantService,
      private route : ActivatedRoute,private pres_service:PrestataireService, private bonpharma:BonPharmacieService) {
        this.options = fb.group({
          hideRequired: this.hideRequiredControl,
          floatLabel: this.floatLabelControl,
        });
     
       }

  ngOnInit(): void {
    // this.bon={}
   // this.getEmploye();
   this.getPrestat();
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        
        this.currentemploye = result;
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
  }
  public BonNow(){
    this.bon.ipm_employe=this.currentemploye;
    this.bon.ipm_prestataire=this.currentprestataire;
    this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(
      (data)=>this.message=data);
    //console.log(this.employe);
     this.router.navigate(['/gestion-bons/Listebons']);
  }
  // public getEmploye(){
  //   this.bon_service.getEmploye().subscribe(
  //    bons=>{
  //     this.currentemploye=bons;
  //    }
  //   )
  //  }

   getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
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
  getPrestBy(prestataire){
    this.pres_service.getPrestataireById(prestataire.idpres).subscribe(result=>
     {
       this.currentprestataire=result;
       this.router.navigate(['/gestion-bons/Ajouterbons/'+prestataire.idpres]);
     } );
  }
//  public makePDF():void{
//   var element=document.getElementById('contente');
//   html2canvas(element).then((canvas)=>{
//     console.log(canvas);
//    var imgData =canvas.toDataURL();
//     var doc =new jsPDF("p","mm","a4");
//     var imaHeight=canvas.height *208/canvas.width;
//    doc.addImage(imgData,0,0,208,imaHeight);
//     doc.save("bonpharmacie.pdf");
//   });
// }

selectedConjoints:string='';
conjs : Array<any>=[];
radioChangeHandler(event:any){
  this.bonss=this.enfants;
}

////////////////
// showSwal(type) {
//   if (type == 'basic') {
//       swal.fire({
//           title: "Here's a message!",
//           buttonsStyling: false,
//           customClass:{
//             confirmButton: "btn btn-success"
//           }
//       });

//   } else if (type == 'title-and-text') {
//       swal.fire({
//           title: "Here's a message!",
//           text: "It's pretty, isn't it?",
//           buttonsStyling: false,
//           customClass:{
//             confirmButton: "btn btn-info"
//           }
//       });

//   } else if (type == 'success-message') {
//       swal.fire({
//           title: "Good job!",
//           text: "You clicked the button!",
//           buttonsStyling: false,
//           customClass:{
//             confirmButton: "btn btn-success",
//           },
//           icon: "success"
//       });

//   } else if (type == 'warning-message-and-confirmation') {
//       swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         customClass:{
//           confirmButton: 'btn btn-success',
//           cancelButton: 'btn btn-danger',
//         },
//         confirmButtonText: 'Yes, delete it!',
//          buttonsStyling: false
//       }).then((result) => {
//         if (result.value) {
//           swal.fire(
//             {
//               title: 'Deleted!',
//               text: 'Your file has been deleted.',
//               icon: 'success',
//               customClass:{
//                 confirmButton: "btn btn-success",
//               },
//               buttonsStyling: false
//             }
//           )
//         }
//       })
//   } else if (type == 'warning-message-and-cancel') {
//       swal.fire({
//           title: 'Are you sure?',
//           text: 'You will not be able to recover this imaginary file!',
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonText: 'Yes, delete it!',
//           cancelButtonText: 'No, keep it',
//           customClass:{
//             confirmButton: "btn btn-success",
//             cancelButton: "btn btn-danger",
//           },
//           buttonsStyling: false
//       }).then((result) => {
//         if (result.value) {
//           swal.fire({
//               title: 'Deleted!',
//               text: 'Your imaginary file has been deleted.',
//               icon: 'success',
//               customClass:{
//                 confirmButton: "btn btn-success",
//               },
//               buttonsStyling: false
//           });
//         } else {
//           swal.fire({
//               title: 'Cancelled',
//               text: 'Your imaginary file is safe :)',
//               icon: 'error',
//               customClass:{
//                 confirmButton: "btn btn-info",
//               },
//               buttonsStyling: false
//           });
//         }
//       })

//   } else if (type == 'custom-html') {
//       swal.fire({
//           title: 'HTML example',
//           buttonsStyling: false,
//           customClass:{
//             confirmButton: "btn btn-success",
//           },
//           html: 'You can use <b>bold text</b>, ' +
//               '<a href="http://github.com">links</a> ' +
//               'and other HTML tags'
//       });

//   } else if (type == 'auto-close') {
//       swal.fire({
//           title: "Auto close alert!",
//           text: "I will close in 2 seconds.",
//           timer: 2000,
//           showConfirmButton: false
//       });
//   } else if (type == 'input-field') {
//       swal.fire({
//           title: 'Input something',
//           html: '<div class="form-group">' +
//               '<input id="input-field" type="text" class="form-control" />' +
//               '</div>',
//           showCancelButton: true,
//           customClass:{
//             confirmButton: 'btn btn-success',
//             cancelButton: 'btn btn-danger',
//           },
//           buttonsStyling: false
//       }).then(function(result) {
//           swal.fire({
//               icon: 'success',
//               html: 'You entered: <strong>' +
//                   $('#input-field').val() +
//                   '</strong>',
//               customClass:{
//                 confirmButton: 'btn btn-success',
//               },
//               buttonsStyling: false

//           })
//       });
//   }
// }

}


