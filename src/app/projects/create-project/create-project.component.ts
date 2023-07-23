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
  project: IProject = { title: '', framework: '', budget: 0, duration:0, 
                      details:'', status: false, uid: ''
                    }

  insubmission = false;
  showAlert = false;
  alertMsg = 'Please wait project is being added!';
  alertColor = 'blue';

  constructor(
    public auth: AuthService, 
    public projectService: ProjectService
    ){
    }

  async addProject(){
    this.insubmission = true;
    this.project.uid = this.auth.getUid();
    this.project.status = true;
    try{
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      },10000);

      await this.projectService.addProject(this.project)
      console.log("Project added successfully");
      
      
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