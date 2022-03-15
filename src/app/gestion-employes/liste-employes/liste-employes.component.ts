import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { EmployeService } from 'src/app/Services/employe.service';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare const $: any;
@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit /*,AfterViewInit*/{

  public tableData: TableData;
  public dataTable: DataTable;
  //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");

  employes : Array<any>=[];
  nom:string;
  prenom:string;
  currentemploye: Employe= new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,"","");
  

  constructor(private emp_service: EmployeService,
              private router: Router,
              private route : ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
//////////////////////

this.dataTable = {
  headerRow: [ 'Numero Carnet', 'Nom', 'Prenom', 'Sexe', 'Matricule', 'Reference','Service','Categorie','Photo','Actions' ],
  footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],

  dataRows: []
};
/////////////////////////
    this.emp_service.listeEmploye().subscribe(
      
      emps => {
        $(function(){
          (<any>$('#datatable')).DataTable({
              "pagingType": "full_numbers",
               "lengthMenu": [
                 [10, 25, 50, -1],
                 [10, 25, 50, "All"]
               ],
               responsive: true,
               language: {
                 search: "_INPUT_",
                 searchPlaceholder: "Recherche",
                 info: " _START_/_END_ sur _TOTAL_ demandes",
                 paginate: {
                  "first":        "Début",
                  "previous":     "Précédent",
                  "next":         "Suivant",
                  "last":         "Fin"
              },
              lengthMenu:"Afficher par _MENU_",
              infoFiltered:""
               },
               
          
             });
        
        })
  
        console.log(emps);
        this.employes = emps;
        console.log(this.employes)
      }
    );
    this.getFiles(this.employes);
  }

  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
    
  }
   getFiles(employe){
     this.emp_service.getFiles(employe.idemp).subscribe(
       result => {
        this.currentemploye = result;
       }
     );
   }
   supprimerEmploye(emp : Employe){
     let conf = confirm("Etes-vous sur ?");
     if(conf)
     this.emp_service.deleteEmployeById(emp.idemp).subscribe(
     () =>{
         console.log("employe supprimer");
         //pour ne pas faire de reload
         //this.supprimerEmployeDuTableau(emp);
         this.router.navigate(['/gestion-employes/ListeEmployes']).then(
          () =>{
            window.location.reload();
          }
        );
       }
     );
     }

    // supprimerEmployeDuTableau(emp: Employe){
    //   this.employes.forEach(
    //     (cur, index) =>{
    //       if(emp.id_emp === cur.id_emp)
    //       {
    //         this.employes.splice(index, 1);
    //       }
    //     }
    //   );
    // }
   /* ngAfterViewInit() {
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Rechercher un employe",
        }

      });
      const table = $('#datatables').DataTable();
      table.on('click', '.like', function(e) {
        alert('You clicked on Like button');
        e.preventDefault();
      });

      $('.card .material-datatables label').addClass('form-group');
    }*/
    upload(){
      var imgData = '/assets/img_poste/laposte.png'
      let doc=new jsPDF();
      let col=[["Numero Carnet","nom","prenom","sexe","matricule","reference","Service","Categorie",]]
      let rows=[]
      for(let employe of this.employes)
      {
        let tmp=[employe.idemp,employe.nom,employe.prenom,employe.sexe,employe.matricule,employe.reference,employe.ipm_service?.type_service,employe.ipm_categorie?.libelle]
        rows.push(tmp)
      }
      autoTable(doc,{
        startY:75,
        head:col,
        body:rows,
        
      });
     
      doc.addImage(imgData ,'JPEG',15,5,25,25)
      doc.setFontSize(20)
      doc.text("Liste Des Employes",75,50)
      const date=new Date()
          doc.setFontSize(10)
          doc.text("Dakar,le:",166,5)
          doc.text(date.toLocaleDateString("fr-FR"),185,5)
    
      
      doc.save("Liste_Employe.pdf");
    }
    
}
