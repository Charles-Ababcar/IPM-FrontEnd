import { Employe } from "./Employe";
import { IPM_Bon } from "./IPM_Bon";
import { Prestataire } from "./Prestataire";

export class  IPM_Bon_Pharmaceutique extends IPM_Bon{  
     constructor(
       public idbon:number,
      public nombre_article:string,
      public service:string,
      public  total:string,
      public date_etablissement:Date,
       public quantite:number,
       public designation:string,
       public prix_unitaire:number,
       public ipm_employe:Employe,
       public ipm_prestataire:Prestataire)
      
       { 
       super(idbon,nombre_article,total,date_etablissement,ipm_employe,ipm_prestataire);
       }
}