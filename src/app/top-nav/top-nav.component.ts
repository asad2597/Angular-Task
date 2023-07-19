import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { Auth, getAuth ,signOut} from '@angular/fire/auth';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent{
  
  afAuth: Auth;
  constructor(
    public modal: ModalService,
    public auth: AuthService
    ){
      this.afAuth = getAuth();
    }

    logout(){
      signOut(this.afAuth);
    }
    
  
}
