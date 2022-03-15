import { Categorie } from "./Categorie";
import { Entity } from "./Entity";
import { Service } from "./Service";

export class Employe{
    constructor(
       public  idemp: number,
       public nom:string,
       public prenom:string,
       public sexe:string,
       public adresse_domicile:string,
       public date_nais: Date,
       public lieu_nais:string,
       public telephone:string,
       public date_recrutement: Date,
       public matricule:string,
       public reference:string,
       public numero_carnet:number,
       public situation_familial:string,
       public solde:string,
       public cumul_charge:string,
       public niveau_salarial:string,
       public ipm_categorie:Categorie,
       public ipm_service:Service,
       public ipm_entity:Entity,
       public picByte:string,
       public retrivevedImage:string,

    ){}
}