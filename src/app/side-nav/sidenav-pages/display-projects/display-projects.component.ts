import { Component } from '@angular/core';
import IProject from 'src/app/Models/project.model';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-display-projects',
  templateUrl: './display-projects.component.html',
  styleUrls: ['./display-projects.component.scss']
})
export class DisplayProjectsComponent {
  projects: IProject[] = []; //to store all projects of user...
  searchedProjects: IProject[] = []; //to store searched projects array....
  selectedProjects: IProject[] = []; // to store projects based on selected tabs....

  searched = ''; //searched input value....
  plength = 0; // length of searched projects array....
  completed = false; 
  viewAll = false;
  inProgress = false;

  //custroctor.....
  constructor(public projectService: ProjectService){}

  //OnInIt....
  ngOnInit(){
    //storing projects in this.projects[]......
    this.viewAll = true;
    this.getProjects();
    this.selectedProjects = this.projects;
  }

  //do check .......
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

  //get project to get all projects of user....
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

  //to show all available project.....
  showAll(){
    this.viewAll = true;
    this.completed = false;
    this.inProgress = false;
    this.selectedProjects = this.projects;
  }

  //to show completed projects....
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

  //to show inProgress projects...
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
