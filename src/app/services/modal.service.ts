import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private login = false;
  private signUp = false;
  private visible = false;
  constructor() { }

  closeModal(){
    this.visible = false;
  }

  onLoginClicked(){
    this.login = true;
    this.signUp = false;
    this.visible = true;
  }

  onSignUpClicked(){
    this.login = false;
    this.signUp = true;
    this.visible = true;
  }

  getLogin(){
    return this.login;
  }
  getSignUp(){
    return this.signUp;
  }
  getVisible(){
    return this.visible;
  }

}
