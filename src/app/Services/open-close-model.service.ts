import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseModelService {

  login = false;
  signup = false;
  isOpen = false;

  constructor() { }
  closeModel(){
    this.isOpen = false;
    console.log( "closeModel:" + this.isOpen);
  }
  onLogin(){
    this.isOpen = true;
    this.login = true;
    this.signup = false;
    console.log( "onLogin:" + this.isOpen);
  }
  onSignUp(){
    this.isOpen = true;
    this.signup = true;
    this.login= false;
    console.log( "onSignUp:" + this.signup + "  login: " + this.login);

  }
  getLogin(){
    return this.login;
  }
  getSignUp(){
    return this.signup;
  }
  getIsOpen(){
    return this.isOpen;
  }
}
