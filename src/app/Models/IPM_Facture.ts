export class Facture{
    constructor(
        public idfacture:number,
        public code_acte:string,
        public date_facture:Date,
        public date_saisie:Date,
        public matricule:number,
        public montant_facture:number,
        public part_imp:number,
        public part_patient:number,
        public tarification:number,
        public code_prestataire:number

    ){}
}