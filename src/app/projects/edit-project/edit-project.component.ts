import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import IProject from 'src/app/Models/project.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnDestroy, OnInit {
  
  project = {} as IProject;
  formTitle = '';
  showAlert = false;
  alertMsg = 'Please wait! Updating project...';
  alertColor = 'text-blue1';
  insubmission = true;
  subscription: Subscription;
  // Constructor.....
  constructor(
    public _projectService: ProjectService,
    public modal: ModalService
  ) {}

  //FormControls.....
  title = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });
  framework = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });
  budget = new FormControl(0, {
    validators: [Validators.required],
    nonNullable: true,
  });
  duration = new FormControl(0, {
    validators: [Validators.required],
    nonNullable: true,
  });
  details = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });
  status = new FormControl(false, { nonNullable: true });
  uid = new FormControl('', { nonNullable: true });
  docID = new FormControl('', { nonNullable: true });
  //FormGroup......
  editForm = new FormGroup({
    title: this.title,
    framework: this.framework,
    budget: this.budget,
    duration: this.duration,
    details: this.details,
    status: this.status,
    uid: this.uid,
    docID: this.docID
  });

  ngOnInit() {
    this.modal.registerModal('editProject');

    this.subscription =  this._projectService.getSelectedproject.subscribe((project) => {
      this.editForm.patchValue(project);
      this.formTitle = project.title;
    });
  }

 async updateProject(){
    this.showAlert = true;
    this.insubmission  = false;
    try{
      
     await this._projectService.update(this.docID.value, this.editForm.value as IProject);
       setTimeout(()=>{
        
        this.showAlert = false;
      },2000);

    }catch(e){
      this.alertMsg = 'Somthing went wrong! Please try again later!';
      this.alertColor = 'text-green-600';
      this.insubmission = true;
      setTimeout(()=>{
        this.showAlert = false;
      },2000);
    }
    this.alertMsg = 'Project updated successfuly!';
    this.alertColor = 'text-green-600';
    this.insubmission = true;  
  }




  ngOnDestroy() {
    this.modal.unregister('editProject');
    this.subscription.unsubscribe();
  }
}
