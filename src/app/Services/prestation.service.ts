import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestataire } from '../Models/Prestataire';
import { Prestation } from '../Models/Prestations';
import { TypePrestataire } from '../Models/TypePrestataire';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private http:HttpClient) {

   }
   public AjoutPrestation(employe){
    console.log(employe);
    return this.http.post(environment.URL+'prestation',employe,{responseType: 'text' as 'json'})
  }
  
 public  listePrestation() : Observable<any>{
    return this.http.get<any>(environment.URL+'employe');
  }


   public ModifierPrestation(pre:Prestation){
     return this.http.put<Prestation>(environment.URL+'prestation',pre);
    
   }

   public getPrestationById(idp: number):Observable<Prestation>{
     return this.http.get<Prestation>(environment.URL+'prestation/'+idp) 
    
   }
   public getPrestatire():Observable<Prestataire[]>{
    return this.http.get<Prestataire[]>(environment.URL+'prestataire');
  }
  public getAllPestataires():Observable<Prestataire[]>{
    return this.http.get<Prestataire[]>(environment.URL+'prestataire');
  }
  public getTypePrestataire():Observable<TypePrestataire[]>{
            return this.http.get<TypePrestataire[]>(environment.URL+'typeprestataire');
  }
}
