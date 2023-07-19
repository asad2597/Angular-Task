import { Injectable } from '@angular/core';
import { Auth, getAuth , fetchSignInMethodsForEmail } from '@angular/fire/auth';
import { AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import { FirebaseApp } from '@angular/fire/app';


@Injectable({
    providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {
  
  private auth: Auth;
  constructor(private afApp: FirebaseApp){
    this.auth = getAuth(this.afApp);
  }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return fetchSignInMethodsForEmail(this.auth , control.value).then(
      (response) => (response.length ? { emailTaken: true } : null)
    );
  };
}
