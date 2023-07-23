//module imports......
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
//components imports......
import { CreateProjectComponent } from '../projects/create-project/create-project.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/']);
const routes: Routes = [
  {
    path: 'createProjects',
    component: CreateProjectComponent,
    data: {
      authOnly: true,
      authGuardPipe: redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
