import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestataire } from 'src/app/Models/Prestataire';
import { Prestation } from 'src/app/Models/Prestations';
import { TypePrestataire } from 'src/app/Models/TypePrestataire';
import { PrestationService } from 'src/app/Services/prestation.service';

@Component({
  selector: 'app-ajout-prestation',
  templateUrl: './ajout-prestation.component.html',
  styleUrls: ['./ajout-prestation.component.css']
})
export class AjoutPrestationComponent implements OnInit {
  message: any;
  p:any;
  pres:number;
prestataire:Prestataire[];
myvalue:number;
pourcentage:any;
typepresta:any;
temptype: any[];
typeP:TypePrestataire[];
addPrestataire:Prestataire;
prestation:Prestation=new Prestation(0,"",0,0,null)
  constructor(private prestation_service:PrestationService,private router: Router) {
    this.addPrestataire=new Prestataire(0,"","","","","","","","");
    // this.percentage = Math.floor(this.myValue / this.value * 100);
   }

  ngOnInit(): void {
    this.getPrestataire();
   
  }
  public onRegister(){
    this.addPrestataire.code_prestataire=this.pres;
    this.prestation.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
    this.prestation_service.AjoutPrestation(this.prestation).subscribe(
      (data)=>this.message=data);
      this.router.navigate(['/gestion-prestations/ListPrestation']);

}
public getPrestataire(){
this.prestation_service.getAllPestataires().subscribe(
  pre => {
    this.prestataire=pre;
    this.temptype=pre
  });
}
public getTypeP(){
  this.prestation_service.getTypePrestataire().subscribe(
    serv => {
     // console.log(serv);
      this.typepresta = serv;
      this.temptype=serv

     // console.log(this.service)
    }
  )
}
public selectTypePres(){
  this.typepresta=this.temptype
   this.typepresta=this.typepresta.filter(serv=>serv.ipm_type_prestataire.code_prestataire==this.pres)

   console.log(this.pres)
 //  console.log(this.service)
 }
}
