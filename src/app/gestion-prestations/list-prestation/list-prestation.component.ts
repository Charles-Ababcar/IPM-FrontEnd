import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Prestataire } from 'src/app/Models/Prestataire';
import { Prestation } from 'src/app/Models/Prestations';
import { PrestationService } from 'src/app/Services/prestation.service';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.css']
})
export class ListPrestationComponent implements OnInit {
 idp:number
 public tableData: TableData;
 //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");

 prestations : Array<any>=[];
  constructor(private prestation_service:PrestationService,private router: Router,
      private route : ActivatedRoute) {
        
       }
  currentprestation:Prestation=new Prestation(0,"",0,0,null)
  ngOnInit(): void {
    this.prestation_service.listePrestation().subscribe( 
      pr => {      
        this.prestations = pr;
        console.log(this.prestations)
      }
    );
    // this.idp=this.route.snapshot.params['id'];
    // this.prestation_service.getPrestationById(this.idp).subscribe(
    //   result => {
    //     this.currentprestation = result;
    //   }
    // );
  }
  public updatePrestation(){

    this.prestation_service.ModifierPrestation(this.currentprestation).subscribe(
        
      () =>{
        
        this.router.navigate(['/gestion-prestations/ListPrestation']) ;
      
      },
      
      (error) =>{
        alert("Probleme lors de la modification !");
      }
     
    );
}
getPrestataire(){
  this.prestation_service.getAllPestataires()
}
}
