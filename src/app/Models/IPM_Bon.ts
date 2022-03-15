import { Employe } from "./Employe";
import { Prestataire } from "./Prestataire";
export class IPM_Bon{
  constructor(
        public idbon: number,
         public nombre_article:string,
         public total:string,
         public  date_etablissement:Date,
       // public ipm_facture:Facture,
         public ipm_employe:Employe,
        public ipm_prestataire:Prestataire,
  ){}

}