import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { Factureroutes, GestionFacturesRoutingModule } from './gestion-factures-routing.module';
import { AjouterFacturesComponent } from './ajouter-factures/ajouter-factures.component';
import { RouterModule } from '@angular/router';
import { Factureroutes } from './gestion-factures-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.module';


@NgModule({
  declarations: [AjouterFacturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Factureroutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    // GestionFacturesRoutingModule
  ],
})
export class GestionFacturesModule { }
