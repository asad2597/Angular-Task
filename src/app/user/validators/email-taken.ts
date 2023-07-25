import { Injectable } from '@angular/core';
import { Auth, fetchSignInMethodsForEmail } from '@angular/fire/auth';
import { AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';



@Injectable({
    providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {
  
  constructor(private auth: Auth){
    
  }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return fetchSignInMethodsForEmail(this.auth , control.value).then(
      (response: string | any[]) => (response.length ? { emailTaken: true } : null)
    );
  };
}
