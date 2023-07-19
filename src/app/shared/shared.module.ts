import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { StoppropagationDirective } from '../Directives/stoppropagation.directive';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Alert2Component } from './alert2/alert2.component';


@NgModule({
  declarations: [
    ModalComponent,
    StoppropagationDirective,
    InputComponent,
    AlertComponent,
    Alert2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    InputComponent,
    AlertComponent,
    Alert2Component
  ]
})
export class SharedModule { }
