import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestataire } from '../Models/Prestataire';


@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  public dataForm:FormGroup;
  constructor(private http:HttpClient) { }


  AjouterPrestataire(prestataire:Object):Observable<Object>{
return this.http.post(environment.URL+'prestataire',prestataire,{responseType: 'text' as 'json'});
  }
  getPrestataire():Observable<any>{
    return this.http.get<any>(environment.URL+'prestataire')
  }
  public getAllPestataires():Observable<Prestataire[]>{
    return this.http.get<Prestataire[]>(environment.URL+'prestataire');
  }
  public getPrestataireById(idpres: number):Observable<Prestataire>{
    return this.http.get<Prestataire>(environment.URL+'prestataire/'+idpres) ;
   
  }
  public modifier(codep: Prestataire){
    return this.http.put(environment.URL+'prestataire',codep)

     
  }
 
}
