import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonPharmacieService {

  constructor(private http:HttpClient) { }
  AjouterBonPharmacie(bon_pharmacie){
    return this.http.post(environment.URL+'bonpharma',bon_pharmacie,{responseType: 'text' as 'json'})
  }
}
