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
  selectedProject: IProject | null = null;
constructor(
  private _projectService: ProjectService,
  public _modalService: ModalService
  ){}

ngOnInit(){
  if(this.tableID!=='searched'){
    this.projects = []
    this.projects = this._projectService.getProjects()
  }
  
  //filters All completed projects...
  if(this.tableID==='completed'){
     this.projects = this.projects.filter(project=>{
       return project.status==true    
     })
    
  }
  //filters All inProgress projects.....
  if(this.tableID==='inProgress'){
    this.projects = this.projects.filter(project=>{
      return project.status==false    
    })
    
    
  }
}

toggleAction(project: IProject){
  this.selectedProject = project;
  this._projectService.setSelectedProject(project);
  this.showAction = !this.showAction;
}
closeAction(){
  this.showAction = false;
}

openEditModal(){

  this._modalService.toggleModal('editProject');
 
}
openDeleteModal(){
  this._modalService.toggleModal('deleteProject');
}

}
