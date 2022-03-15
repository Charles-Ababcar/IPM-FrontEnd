import { PrestataireService } from "../Services/prestataire.service";
import { Prestataire } from "./Prestataire";

export class TypePrestataire{
    constructor(
        public id_type_prestataire:number,
         public libelle:string,
        public nom_type_prestaire:string,
        public prestataire :Prestataire
        ){}
    
}