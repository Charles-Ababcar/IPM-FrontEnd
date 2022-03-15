import { TypePrestataire } from "./TypePrestataire";

export class Prestataire{
    constructor(
    public  code_prestataire:number,
    public  nom_prestataire:string,
    public  adresse_prestataire:string,
    public  email:string,
    public  raison_social:string,
    public  telephone:string,
    public  fax:string,
    public code_categorie_pretataire:string,
    public nature:string,
   // public ipm_type_prestataire:TypePrestataire
    )
    {}
}