import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/Categorie';
import { Employe } from '../Models/Employe';
import { Entity } from '../Models/Entity';
import { IPM_Bon } from '../Models/IPM_Bon';
import { Service } from '../Models/Service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient ) { 
    
  }
  
  //private baseUrl = '/ipm/employe';

  public AjoutEmploye(employe){
    console.log(employe);
    return this.http.post(environment.URL+'employe',employe,{responseType: 'text' as 'json'})
  }
   

  listeEmploye() : Observable<any>{
    return this.http.get<any>(environment.URL+'employe');
  }


   public ModifierEmploye(emp: Employe){
     return this.http.put<Employe>(environment.URL+'employe',emp)
    
   }

   public getEmployeById(idemp: number):Observable<Employe>{
     return this.http.get<Employe>(environment.URL+'employe/'+idemp) 
    
   }

   deleteEmployeById(idemp: number){
    return this.http.delete(environment.URL+'employe/'+idemp, {responseType: 'text' as 'json'});

   }

   public getEmploye(){
     return this.http.get(environment.URL+'employe');
   }
   public getEmployeByMatricules(matricule: string):Observable<Employe>{
     
    return this.http.get<Employe>(environment.URL+'rechercheM/'+matricule);
  }

   public getEmployeByMatricule(matricule: string):Observable<Employe>{
     
     return this.http.get<Employe>(environment.URL+'rechercheM/'+matricule);
   }

   public getService():Observable<Service[]>{
     return this.http.get<Service[]>(environment.URL+'service');
   }

   public getCategorie():Observable<Categorie[]>{
     return this.http.get<Categorie[]>(environment.URL+'categorie');
   }

   public getEntity():Observable<Entity[]>{
    return this.http.get<Entity[]>(environment.URL+'entity');
  }
  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

   getFiles(idemp:number): Observable<Employe> {
     return this.http.get<Employe>(environment.URL+'ImagesEmployes/'+idemp);
   }
   uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
   addUploadData(selectedFile) {
    return this.http.post('http://localhost:8082/api/upload', selectedFile);
  }
}
