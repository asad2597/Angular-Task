import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { Alert2Component } from './alert2/alert2.component';
import { TabscontainerComponent } from './tabscontainer/tabscontainer.component';
import { TabComponent } from './tab/tab.component';

import { StoppropagationDirective } from '../Directives/stoppropagation.directive';


@NgModule({
  declarations: [
    ModalComponent,
    StoppropagationDirective,
    InputComponent,
    AlertComponent,
    Alert2Component,
    TabscontainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    InputComponent,
    AlertComponent,
    Alert2Component,
    TabscontainerComponent,
    TabComponent
  ]
})
export class SharedModule { }
