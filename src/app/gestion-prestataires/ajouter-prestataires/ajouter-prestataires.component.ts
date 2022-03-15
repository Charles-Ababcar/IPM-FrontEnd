import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrestataireService } from 'src/app/Services/prestataire.service';

@Component({
  selector: 'app-ajouter-prestataires',
  templateUrl: './ajouter-prestataires.component.html',
  styleUrls: ['./ajouter-prestataires.component.css']
})
export class AjouterPrestatairesComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
  constructor(public pres_service:PrestataireService,public fb:FormBuilder,public router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
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
ajouterPres(){

  this.pres_service.AjouterPrestataire(this.pres_service.dataForm.value).
  subscribe(data=>{
    this.toastr.success("Hello, I'm the toastr message.");
    this.router.navigate(['/gestion-prestataires/ListePrestataires'])})
}



}
