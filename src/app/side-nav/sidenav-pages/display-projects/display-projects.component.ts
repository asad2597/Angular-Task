import { Component } from '@angular/core';
import IProject from 'src/app/Models/project.model';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-display-projects',
  templateUrl: './display-projects.component.html',
  styleUrls: ['./display-projects.component.scss']
})
export class DisplayProjectsComponent {
  projects: IProject[] = [];
  searchedProjects: IProject[] = [];
  selectedProjects: IProject[] = [];

  searched = '';
  plength = 0;
  completed = false;
  viewAll = false;
  inProgress = false;

  constructor(
    public projectService: ProjectService
    ){
    }
    ngOnInit(){
      //storing projects in this.projects[]......
      this.viewAll = true;
      this.getProjects();
      this.selectedProjects = this.projects;
    }
    ngDoCheck(){
      
      if(this.searched!==''){
        this.searchedProjects = [];
        this.plength = 0;
        this.projects.forEach(project=>{
          if(project.title === this.searched){
            this.searchedProjects.push(
              project
            )
          }
        })
        this.plength = this.searchedProjects.length;
      }
      
    }

    async getProjects(){
      this.projects = [];
     await this.projectService.getProjects()
      .then(qDocs => qDocs.forEach(
              qDoc =>  this.projects.push(
                qDoc.data() as IProject
              )
            )
          )
    }

    showAll(){
      this.viewAll = true;
      this.completed = false;
      this.inProgress = false;
      this.selectedProjects = this.projects;
    }
    showCompleted(){
      this.completed = true;
      this.inProgress = false;
      this.viewAll = false;
      
      this.selectedProjects = [];
      
      this.projects.forEach(project=>{
        if(project.status){
          this.selectedProjects.push(
            project
          )
        }
      })
    }

    showInProgress(){
      this.inProgress = true;
      this.viewAll = false;
      this.completed = false;
      
      this.selectedProjects = [];

      this.projects.forEach(project=>{
        if(!project.status){
          this.selectedProjects.push(
            project
            
          )
        }
      })
    }
}
