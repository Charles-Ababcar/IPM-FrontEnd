import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { RechercheEmployeComponent } from '../gestion-employes/recherche-employe/recherche-employe.component';
import { EmployeService } from '../Services/employe.service';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
