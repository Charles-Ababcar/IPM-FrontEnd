import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../Models/Employe';
import { IPM_Bon } from '../Models/IPM_Bon';

@Injectable({
  providedIn: 'root'
})
export class BonService {

  constructor(private http:HttpClient) { }

  public AjoutBon(bon){
    console.log(bon);
    return this.http.post(environment.URL+'bon',bon,{responseType: 'text' as 'json'})
  }
  // public getBonById(idbon: number):Observable<IPM_Bon>{
  //   return this.http.get<IPM_Bon>(environment.URL+"/bon/{id}/"+idbon) ;
   
  // }
  public getEmploye():Observable<Employe>{
    return this.http.get<Employe>(environment.URL+'employe');
  }
  
  public getEmployeById(idemp: number):Observable<Employe>{
    return this.http.get<Employe>(environment.URL+'employe/'+idemp) 
   
  }
  listeBon() : Observable<any>{
    return this.http.get<any>(environment.URL+'bon/');
  }
}
