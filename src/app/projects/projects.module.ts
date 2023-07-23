import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

import { CreateProjectComponent } from './create-project/create-project.component';
import { DisplayProjectsComponent } from './displlay-projects/display-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjecttabsContainerComponent } from './projecttab-container/projecttabs-container.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';

@NgModule({
  declarations: [
    CreateProjectComponent,
    DisplayProjectsComponent,
    EditProjectComponent,
    ProjecttabsContainerComponent,
    ProjectsTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [ProjectsTableComponent]
})
export class ProjectsModule {}
