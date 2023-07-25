import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  
  insubmission = true;

  constructor(private auth: AuthService, private modal: ModalService){
    
  }
 loginUser($event: Event){
    $event.preventDefault();
    this.insubmission = false;
    try{
      this.auth.logIn(this.credentials.email, this.credentials.password);
      setTimeout(()=>{
        this.modal.toggleModal('auth');  
      },500);
      
    }catch(e){
      this.insubmission = true;
      console.log("Error from LoginUser....");
    }
    
  }
}
