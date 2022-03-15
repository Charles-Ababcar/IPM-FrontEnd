import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Categorie } from 'src/app/Models/Categorie';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { Service } from 'src/app/Models/Service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
declare var $:any
@Component({
  selector: 'app-carnet-employe',
  templateUrl: './carnet-employe.component.html',
  styleUrls: ['./carnet-employe.component.css']
})
export class CarnetEmployeComponent implements OnInit {
//Objet du Conjoint et l'enfant
  conjoint: Conjoint= new Conjoint(0,"","",null,null,"","");
  enfant: Enfant= new Enfant(0,"","",null,"","",null);
  enfantt: Enfant= new Enfant(0,"","",null,"","",null);
  ide : number;
  employe: Employe[];
  message: any;
  //Objets lister les conjoints
  public tableData: TableData;
  conjoints : Array<any>=[];
  nom_conjoint:string;
  prenom_conjoint:string;
  currentconjoint: Conjoint= new Conjoint(0,"","",null,null,"","");
  /////Objets lister Enfants///////
  public tableDatas: TableData;
  iden:number;
  enfants : Array<any>=[];
  currentenfant: Enfant= new Enfant(0,"","",null,"","",null);
  myMessage="Salut votre enregistrement est effectue !!! "
  myId=0 ;

  /////////
  currentemploye: Employe= new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,"","");
  id : number;
  service: Service[];
  categorie: Categorie[];
  servi:number;
  cate:number;
  addService : Service;
  addCategorie : Categorie;
  addEmploye:Employe;
  selectedFile: any;
  userFile: any;
  imagePath: any;
  imgURL: any;
  constructor(private emp_service: EmployeService, private conj_service:ConjointService,private enf_service:EnfantService,
    private router: Router,
    private route : ActivatedRoute) { 
      this.addCategorie=new Categorie();
      this.addService=new Service();
      this.addEmploye=new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,"","")
    }

  ngOnInit(): void {
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    $('.modal').on('shown.bs.modal', function () {
      mainPanel.classList.add('no-scroll');
    })
    $('.modal').on('hidden.bs.modal', function () {
      mainPanel.classList.remove('no-scroll');
    })
    this.getCategorie();
    this.getService(); 
    this.getEmploye();
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
  
  getConjointById(conjoint){
    this.conj_service.getConjointById(conjoint.idconj).subscribe(
      result => {
        this.currentconjoint = result;
      }
    );
  }
  getEnfantById(enfant){
    this.enf_service.getEnfantById(enfant.idenf).subscribe(
      result => {
        this.currentenfant = result;
      }
    );
  }
  ////////////----------------//////////////////
  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
    );
  }
   //Recuperer les employe au niveau  des conjoints
     public getEmploye(){
      this.conj_service.getEmploye().subscribe(
       conj=>{
        this.employe=conj;
       }
      )
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
//Ajout du Conjoint de l'employé
    public ConjointNow(){
    
      this.conjoint.ipm_employe=this.currentemploye;
      console.log(this.conjoint);
      this.conj_service.AjoutConjoint(this.conjoint).subscribe(
        (data)=>this.message=data)
        if(!this.message){
          this.showNotification('top','center',1,'<b>conjoint ajouté</b> :')
         // console.log(this.message);
             this.router.navigate(['/gestion-employes/carnetEmploye/:id']);
        }
      else if(this.message==null){
          console.log("not existe");
          this.showNotification('top','center',3,"<b>conjoint non ajouté</b> :")
        }
    
   
}
showNotification(from: any, align: any, idtype:any,note ) {
  const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

 // const color = Math.floor((Math.random() * 6) + 1);

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
//Fin de l'ajout des Conjoints de l'employé
//Ajout du Conjoint de l'employé
public EnfantNow(){
    
  this.enfant.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
  //console.log(this.enfant);
    this.enfantt.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
    console.log(this.enfantt)

 let obj =  this.enf_service.AjoutEnfant(this.enfant).subscribe(
    (data)=> { 
      this.message=data ;
      console.log("the message ",data)
      
      return this.message
    })

      console.log("MyObjecccc" , obj)

      this.enf_service.uploadFile(this.enfant.idenf,this.selectedFile).subscribe(
        (data)=> { 
          this.message=data ;
          console.log("the message ",data)
          
          return this.message
        })
    if(!this.message){
      this.showNotification1('top','center',1,'<b>enfant ajouté</b> :')
     // console.log(this.message);
         this.router.navigate(['/gestion-employes/carnetEmploye/:id']);
    }
  else if(this.message==null){
      console.log("not existe");
      this.showNotification1('top','center',3,"<b>enfant non ajouté</b> :")
    }
    


}
showNotification1(from: any, align: any, idtype:any,note ) {
const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

// const color = Math.floor((Math.random() * 6) + 1);

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
////////////////////----------/////////////////
//recuperer le fichier
getFile(event:any){
 /* const file = event.target.files[0];
  this.selectedFile = file*/

  console.log(event);
  this.selectedFile = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
  };

  //console.log("fichier selectionne")
}
//envoyer le fivhier au serveur


// onSelectFile(event){
//   if(event.target.files.length>0)
//   {
//      const file=event.target.files[0];
//      this.userFile=file;
//     // this.f["profile"].setValue(file);
//     var mimeType=event.target.files[0].type;
//     if(mimeType.match(/image\/*/)==null)
//     {
//       this.message="Only images are surrported.";
//       return ;
//     }
//     var reader = new FileReader();
//   this.imagePath=file;
//   reader.readAsDataURL(file);
//   reader.onload=(_event)=>  {
//     this.imageURL=reader.result;
//   }
//  }
// }
//envoyer le fivhier au serveur
// uploadFile(){
//   if (this.selectedFile != null){
//     this.enf_service.uploadFile(this.selectedFile).subscribe(
//       response => {
//         console.log(response);
//       },
//     error => {
//       console.log(error);
//     }
//     )
//   }
// }
}