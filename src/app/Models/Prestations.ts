import { Prestataire } from "./Prestataire";

export class Prestation{
constructor(
    public code_prestation:number,
    public libelle:string,
    public taux_agrees:number,
    public taux_non_agrees:number,
    public ipm_prestataire:Prestataire
){}
}