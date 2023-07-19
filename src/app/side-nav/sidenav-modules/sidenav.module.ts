import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { CreateProjectComponent } from '../sidenav-pages/create-project/create-project.component';
import { DisplayProjectsComponent } from '../sidenav-pages/display-projects/display-projects.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CreateProjectComponent,
        DisplayProjectsComponent
    ],
    imports: [
        CommonModule,
        SidenavRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class SidenavModule { }
