import { Employe } from "./Employe";

export class Enfant {
  constructor(
         public  idenf:number,
         public nom_enfant:string,
        public prenom_enfant:string,
        public date_nais_enfant:Date,
        public lieu_nais_enfant:string,
        public sexe_enfant :string,
        public ipm_employe: Employe,
  )
      {}
}