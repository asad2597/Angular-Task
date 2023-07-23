import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent{
  
  
  constructor(
    public modal: ModalService,
    public auth: AuthService
    ){
      
    }

    openModal(){
      this.modal.toggleModal('auth');
    }
    
  
}
