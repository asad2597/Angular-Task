import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import IProject from 'src/app/Models/project.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent implements OnInit, OnDestroy{
  delete = false;
  id : string;
  projectTitle = '';
  showAlert = false;
  alertMsg = 'Please wait! Deleting project...';
  alertColor = 'text-blue1';
  insubmission = true;
  subscription: Subscription;

  constructor(public _modalService: ModalService, public _projectService: ProjectService){

  }

  ngOnInit(){
    this._modalService.registerModal('deleteProject');
    this.subscription = this._projectService.getSelectedproject.subscribe((project) => {
        this.id = project.docID!;
        this.projectTitle = project.title;
    });

  }

  async deleteProject(){
    
    
    this.showAlert = true;
    this.insubmission  = false;
    try{
      
      await this._projectService.delete(this.id!);
      setTimeout(()=>{
        this.showAlert = false;
        this._modalService.toggleModal('deleteProject');
      }, 5000);

    }catch(e){
      this.alertMsg = 'Somthing went wrong! Please try again later!';
      this.alertColor = 'text-green-600';
      this.insubmission = true;
      setTimeout(()=>{
        this.showAlert = false;
      }, 1000);
    }
    this.alertMsg = 'Project Deleted successfuly!';
    this.alertColor = 'text-green-600';
    this.insubmission = true; 
  }
  ngOnDestroy(){
    this._modalService.unregister('deleteProject');
    this.subscription.unsubscribe();
  }

}
