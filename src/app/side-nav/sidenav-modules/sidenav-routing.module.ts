//module imports......
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components imports......
import { CreateProjectComponent } from '../sidenav-pages/create-project/create-project.component';

const routes: Routes = [
  {
    path: 'createProjects',
    component: CreateProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
