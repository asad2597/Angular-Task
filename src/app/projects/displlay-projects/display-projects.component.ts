import { Component } from '@angular/core';
import IProject from 'src/app/Models/project.model';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-display-projects',
  templateUrl: './display-projects.component.html',
  styleUrls: ['./display-projects.component.scss']
})
export class DisplayProjectsComponent {
  projects: IProject[] = []; //to store all projects of user...
  searchedProjects: IProject[] = []; //to store searched projects array....
  searchedTitle = ''; //searched input value....
  showModal = true;

  //custroctor.....
  constructor(
      public _projectService: ProjectService,
      public auth: AuthService,
      public modal: ModalService
      ){}

  //OnInIt....
  ngOnInit(){
    this.searchedProjects = [];

    
    this.getProjects(); //storing projects in this.projects[]......
    
    
  }

  //do check .......
  ngDoCheck(){
    
    if(this.searchedTitle!==''){
      this.searchProject(this.searchedTitle)
    }
  }
  
  //get project to get all projects of user....
  getProjects(){
    this.projects = [];
    this.projects = this._projectService.getProjects()
  }

  searchProject(title: string){
      this.searchedProjects = [];
      
      this.searchedProjects = this.projects.filter(project=>{
        
        return project.title.toLowerCase() === title.toLowerCase()
      })
  }
  
}
