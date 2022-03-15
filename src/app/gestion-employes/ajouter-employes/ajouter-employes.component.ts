import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { image } from 'html2canvas/dist/types/css/types/image';
import { data } from 'jquery';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { Entity } from 'src/app/Models/Entity';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';
declare const $:any;
interface FileReaderEvent extends EventTarget{
  result :string;
}
interface FileReaderEvent extends Event{
  target :EventTarget;
  getMessage():string;
}
@Component({
  selector: 'app-ajouter-employes',
  templateUrl: './ajouter-employes.component.html',
  styleUrls: ['./ajouter-employes.component.css']
})
export class AjouterEmployesComponent  implements OnInit,OnChanges {
  private selectedFile:any;
  @Output()
  employeAddedEvent =new EventEmitter()
  imgURL: any;
  employe: Employe = new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null,null,"","",);
  message: any;
  service: any[];
  categorie: Categorie[];
  entity:Entity[];
  enti:number;
  servi:number;
  cate:number;
  userFile;
  addEntity:Entity;
  addService : Service;
  addCategorie : Categorie;
  tempservice: any[];
  //employe: Employe;
  selectFormControl = new FormControl('', Validators.required);
  constructor(private emp_service:EmployeService,
              private router: Router,private fb:FormBuilder,private http:HttpClient) {    
                this.addCategorie=new Categorie();
                this.addService=new Service();
                this.addEntity=new Entity(0,"","")
                      }
  
  ngOnInit(): void {
    this.getCategorie();
    this.getService();
    this.getEntity();
    /////////////////

    
  ////////////
     // Prepare the preview for profile picture
 $('#wizard-picture').change(function(){
  const input = $(this);

  if (input[0].files && input[0].files[0]) {
      const reader = new FileReader();

      reader.onload = function (e: any) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      };
      reader.readAsDataURL(input[0].files[0]);
  }
}); 

 $('[data-toggle="wizard-radio"]').click(function(){
            const wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function(){
            if ( $(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
      
        $('.set-full-height').css('height', 'auto');
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    const input = $(this);

  if (input[0].files && input[0].files[0]) {
      const reader: any = new FileReader();

      reader.onload = function (e: any) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      };
      reader.readAsDataURL(input[0].files[0]);
  }
  }
/////choisir et recuperer l'image sur l'ordinateur
public onFileChanged(event) {
  console.log(event);
  this.selectedFile = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
  };

}
  public EmployeNow(){
      const uploadData = new FormData();
      this.addService.idService=this.servi;
      this.employe.ipm_service=JSON.parse(JSON.stringify(this.addService));
  
      this.addEntity.idEntity=this.enti;
      this.employe.ipm_entity=JSON.parse(JSON.stringify(this.addEntity));
  
      this.addCategorie.code_categorie=this.cate;
      this.employe.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
      console.log(this.employe);
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.http.post('http://localhost:8082/ipm/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
            if (response.status === 200) {
              this.emp_service.AjoutEmploye(this.employe).subscribe(
                (data)=>this.message=data);
                  this.employeAddedEvent.emit();
                  this.router.navigate(['/gestion-employes/ListeEmployes']);
                
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    
    /*const formData=new FormData();
    this.addService.idService=this.servi;
    this.employe.ipm_service=JSON.parse(JSON.stringify(this.addService));

    this.addEntity.idEntity=this.enti;
    this.employe.ipm_entity=JSON.parse(JSON.stringify(this.addEntity));

    this.addCategorie.code_categorie=this.cate;
    this.employe.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
    console.log(this.employe);
    formData.append('file',this.userFile);
    this.emp_service.AjoutEmploye(this.employe).subscribe(
      (data)=>this.message=data);
    //console.log(this.employe);
     this.router.navigate(['/gestion-employes/ListeEmployes']);
     this.emp_service.uploadFile(this.userFile).subscribe(
      (data)=>this.message=data);
    //console.log(this.employe);
     this.router.navigate(['/gestion-employes/ListeEmployes']);*/
  } 
  


  public getService(){
    this.emp_service.getService().subscribe(
      serv => {
       // console.log(serv);
        this.service = serv;
        this.tempservice=serv

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

  public getEntity(){
    this.emp_service.getEntity().subscribe(
      ent => {
       // console.log(cat);
        this.entity = ent;
       // console.log(this.categorie)
      }
    )
    }

  public selectService(){
   this.service=this.tempservice
    this.service=this.service.filter(serv=>serv.ipm_entity.idEntity==this.enti)

    console.log(this.enti)
    console.log(this.service)
  }
///////image template


// Only AlphaNumeric with Some Characters [-_ ]
keyPressAlphaNumericWithCharacters(event) {

  var inp = String.fromCharCode(event.keyCode);
  // Allow numbers, alpahbets, space, underscore
  if (/[A-Z0-9]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

 FormControlEmpployes=this.fb.group({
  nom:[null,Validators.required],
  prenom:[null,Validators.required],
  sexe:[null,Validators.required],
  adresse_domicile:[null,Validators.required],
  situation_familial:[null,Validators.required],
  date_nais:[null,Validators.required],
  lieu_nais:[null,Validators.required],
  telephone:[null,Validators.required],
  date_recrutement:[null,Validators.required],
  reference:[null,Validators.required],
   ipm_categorie:[null,Validators.required],
   ipm_service:[null,Validators.required],
  //  ipm_entity:[null,Validators.required],
  matricule:[null,Validators.compose([
    Validators.required,Validators.minLength(7),Validators.maxLength(7)
  ] ,  
  )]
});

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
}
