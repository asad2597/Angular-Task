import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import IProject from 'src/app/Models/project.model';
import { ModalService } from 'src/app/services/modal.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent {

  //@Input() selectedProject: IProject | null = null;
 @ViewChild('editForm') editForm: NgForm;
  @Input() project: IProject = {
    title: '',
    framework: '',
    budget: 0,
    duration: 0,
    details: '',
    status: false,
    uid: ''
  };
  insubmission = true;

  constructor(
    public projectService: ProjectService,
    public modal: ModalService
    ){
      
    }

  ngOnInit(){
   
    this.modal.registerModal('editProject');
    
    
    
  }
  
  ngOnChanges(){
    if(!this.project){
      return
    }
   // console.log("OnChanges: " + this.editForm);
      console.log(this.project);
      if(this.project.title!==''){
        setTimeout(()=>{
          this.editForm.control.patchValue({title: JSON.stringify(this.project.title)})
          console.log("Title: " + typeof(this.project.title))
        });
      }
      
      
    
  }

  setValue(editForm: NgForm){
    let obj = {
      title: "this.project.title",
      framework: "this.project.framework",
      details: "this.project.details"
    };
    editForm.control.patchValue(obj);
    console.log("setValue Called: " + obj)
  }
  OnDestroy(){

    this.modal.unregister('editProject');
  }

}
