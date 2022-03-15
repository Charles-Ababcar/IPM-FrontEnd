import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Enfant } from '../Models/Enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  constructor(private http:HttpClient) { }


  public AjoutEnfant(enfant){
    
    return this.http.post(environment.URL+'enfant',enfant,{responseType: 'text' as 'json'})
  }

  listeEnfant(idemp: number) : Observable<any>{
    return this.http.get<any>(environment.URL+'/getenfantByid/'+idemp);
  }
  public getEnfantById(idenf: number):Observable<Enfant>{
    return this.http.get<Enfant>(environment.URL+'enfant/'+idenf) 
   
  }
  uploadFile(id :number, file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('image', file,file.name);
    return this.http.post(environment.URL+"upload/"+id,formData);

  }
}

