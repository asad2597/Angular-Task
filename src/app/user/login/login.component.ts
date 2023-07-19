import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';

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

  auth: Auth;
  insubmission = true;

  constructor(){
    this.auth = getAuth();
  }
  async loginUser(){

    try{
      await signInWithEmailAndPassword(
        this.auth, 
        this.credentials.email,
        this.credentials.password
        )
        this.insubmission = false;
    }catch(e){

    }
    
  }
}
