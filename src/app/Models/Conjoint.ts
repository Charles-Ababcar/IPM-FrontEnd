import { Employe } from "./Employe";

export class Conjoint{  
    constructor(
        public idconj:number,
        public nom_conjoint:string,
       public  prenom_prenom_conjoint:string,
       public ipm_employe: Employe,
       public date_naiss_conj:Date,
       public lieu_naiss_conj:string,
       public telephone:string
    )
        {}
}
