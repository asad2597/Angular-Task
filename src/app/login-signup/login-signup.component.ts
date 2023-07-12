import { Component } from '@angular/core';
import { OpenCloseModelService } from '../Services/open-close-model.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  constructor(public model: OpenCloseModelService){
    
  }
  
}
