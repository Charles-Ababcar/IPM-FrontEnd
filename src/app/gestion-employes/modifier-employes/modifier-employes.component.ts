import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-modifier-employes',
  templateUrl: './modifier-employes.component.html',
  styleUrls: ['./modifier-employes.component.css']
})
export class ModifierEmployesComponent implements OnInit {

  currentemploye: Employe= new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,null,"");
  id : number;
  service: Service[];
  categorie: Categorie[];
  servi:number;
  cate:number;
  addService : Service;
  addCategorie : Categorie;


  constructor(private emp_service: EmployeService,
              private router: Router,
              private route : ActivatedRoute) { 
                this.addCategorie=new Categorie();
                this.addService=new Service();
              }

  ngOnInit(): void {

    this.getCategorie();
    this.getService();

    this.id=this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
  }


  

    public updateEmploye(){
      this.addService.idService=this.servi;
      this.currentemploye.ipm_service=JSON.parse(JSON.stringify(this.addService));
      this.addCategorie.code_categorie=this.cate;
      this.currentemploye.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
    
      console.log(this.currentemploye);
      this.emp_service.ModifierEmploye(this.currentemploye).subscribe(
        
        () =>{
          
          this.router.navigate(['/gestion-employes/ListeEmployes']) ;
        
        },
        
        (error) =>{
          alert("Probleme lors de la modification !");
        }
       
      );

      //debugger;
    } 

    public getService(){
      this.emp_service.getService().subscribe(
        serv => {
         // console.log(serv);
          this.service = serv;
         // console.log(this.service)
        }
      )
    }

    public getCategorie(){
      this.emp_service.getCategorie().subscribe(
        cat => {
         // console.log(cat);
          this.categorie = cat;
         // console.log(this.categorie)
        }
      )
    }

}
