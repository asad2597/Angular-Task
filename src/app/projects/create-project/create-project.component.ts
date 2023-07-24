import { Component } from '@angular/core';
import IProject from 'src/app/Models/project.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  project = {} as IProject;

  insubmission = false;
  showAlert = false;
  alertMsg = 'Please wait project is being added!';
  alertColor = 'blue';

  constructor(
    public _auth: AuthService, 
    public _projectService: ProjectService
    ){
    }
  async addProject(){
    this.insubmission = true;
    this.project.uid = this._auth.getUid();
    this.project.status = true;
    try{
      this.showAlert = true;

      await this._projectService.addProject(this.project)
      setTimeout(() => {
        this.showAlert = false;
      },5000);
      
    }catch(e){
      console.log("Error: " + e);
      
      this.alertMsg = "An unexpected error occured! Please try again later";
      this.alertColor = 'red';
    }
    this.alertMsg = "New project has been added successfuly!";
    this.alertColor = 'green';
    this.insubmission = false;
  }

}
