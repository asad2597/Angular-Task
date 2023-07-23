import { Component, Input } from '@angular/core';
import IProject from 'src/app/Models/project.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent {

  @Input() tableID = '';
  @Input() projects: IProject[] = [];
  showAction = false;
  selectedProject: IProject = {
    title: '',
    framework: '',
    budget: 0,
    duration: 0,
    details: '',
    status: false,
    uid: ''
  };
constructor(
  private projectService: ProjectService,
  public modal: ModalService
  ){}

ngOnInit(){
  if(this.tableID!=='searched'){
    this.projects = this.projectService.getProjects();
  }
  
  //filters All completed projects...
  if(this.tableID==='completed'){
     this.projects = this.projects.filter(project=>{
       return project.status==true    
     })
    //this.projectService.setSelectedProjects(this.projects.length);
  }
  //filters All inProgress projects.....
  if(this.tableID==='inProgress'){
    this.projects = this.projects.filter(project=>{
      return project.status==false    
    })
    //this.projectService.setSelectedProjects(this.projects.length);
    console.log("Output from table component:")
  }
}

toggleAction(project: IProject){
  this.selectedProject = project;
  this.showAction = !this.showAction;
}

openEditModal(){

  this.modal.toggleModal('editProject');
 
}

}
