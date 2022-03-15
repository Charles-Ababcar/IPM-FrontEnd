import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TableData } from 'src/app/md/md-table/md-table.component';
import { Prestataire } from 'src/app/Models/Prestataire';
import { PrestataireService } from 'src/app/Services/prestataire.service';

declare const $: any;
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-liste-prestataires',
  templateUrl: './liste-prestataires.component.html',
  styleUrls: ['./liste-prestataires.component.css']
})

export class ListePrestatairesComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
  id : number;
  public tableData: TableData;
  currentprestataire:Prestataire=new Prestataire(0,"","","","","","","","");
  public dataTable: DataTable;
listPrestataire:Prestataire[];
  constructor(public pres_service:PrestataireService,public fb:FormBuilder
    ,private router:Router,private toastr: ToastrService, private route : ActivatedRoute
) { }

  ngOnInit(): void {
   // this.getPres();

   this.initForm();
   this.dataTable = {
    headerRow: [ 'Nom Prestataire', 'Adresse', , 'Email', 'raison_social', 'Telephone','Code Catrgorie','Nature' ],
    footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],
    dataRows: []
  }
   this.id=this.route.snapshot.params['id']; 
    this.pres_service.getPrestataire().subscribe(
      result => {
        this.listPrestataire=result;
      });
  
   ////////////////// 
  
      
  }
  initForm(){
    this.pres_service.dataForm=this.fb.group({
      code_prestataire:null,
      nom_prestataire:['',[Validators.required]],
      adresse_prestataire:['',[Validators.required,,Validators.maxLength(5)]],
      email:['',[Validators.required,Validators.maxLength(10)]],
      raison_social:['',[Validators.required]],
      telephone:['',[Validators.required,Validators.maxLength(8)]],
      fax:['',[Validators.required,Validators.maxLength(8)]],
      code_categorie_pretataire:['',[Validators.required]],
      nature:['',[Validators.required]],
    })
    }
 
getPrestaById(prestataire){
  this.pres_service.getPrestataireById(prestataire.code_prestataire).subscribe(
    result => {
      this.currentprestataire = result;
      console.log(this.currentprestataire);
    }
  );
}

update(){
  //console.log(this.currentprestataire);
this.pres_service.modifier(this.currentprestataire).subscribe(   
  () =>{
   // this.showNotification('top','center') 
    // this.toastr.success( 'Modification Faite avec Success');
    this.router.navigate(['/liste-prestataires']);
  }
  );
}

}
