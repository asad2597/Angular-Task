import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TabscontainerComponent } from 'src/app/shared/tabscontainer/tabscontainer.component';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy, AfterViewChecked{

  @ViewChild(TabscontainerComponent) tab?: TabscontainerComponent
  isLogin = false;
  isSignUp = false;

  constructor(public modal: ModalService, private cdRef:ChangeDetectorRef){
  }

  ngOnInit(): void{
    this.modal.registerModal('auth');  
  }
  ngAfterViewChecked(){
    this.isLogin = Boolean(this.tab?.tabs?.first.active);
    this.isSignUp = Boolean(this.tab?.tabs?.last.active);
    this.cdRef.detectChanges();
  }
  ngOnDestroy(){
    this.modal.unregister('auth');
  }

}
