import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ClickOutsideDirective } from '../Directives/click-outside.directive';

import { CreateProjectComponent } from './create-project/create-project.component';
import { DisplayProjectsComponent } from './displlay-projects/display-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjecttabsContainerComponent } from './projecttab-container/projecttabs-container.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';

@NgModule({
  declarations: [
    CreateProjectComponent,
    DisplayProjectsComponent,
    EditProjectComponent,
    ProjecttabsContainerComponent,
    ProjectsTableComponent,
    DeleteProjectComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  exports: [ProjectsTableComponent]
})
export class ProjectsModule {}
