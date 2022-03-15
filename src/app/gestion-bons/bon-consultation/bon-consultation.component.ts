import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonService } from 'src/app/Services/bon.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';

@Component({
  selector: 'app-bon-consultation',
  templateUrl: './bon-consultation.component.html',
  styleUrls: ['./bon-consultation.component.css']
})
export class BonConsultationComponent implements OnInit {
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
  constructor(private emp_service:EmployeService, fb: FormBuilder,
    private router: Router,private bon_service:BonService,
   private conj_service:ConjointService,private enf_service:EnfantService,
   private route : ActivatedRoute,private pres_service:PrestataireService,) { }

  ngOnInit(): void {
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

}
