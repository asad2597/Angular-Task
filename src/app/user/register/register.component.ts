import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/Models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  alertColor = 'text-green-500';
  alertMsg = '';
  showAlert = false;

  constructor(private emailTaken: EmailTaken, private auth: AuthService) {}

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl(
    '',
    [Validators.required, Validators.email],
    [this.emailTaken.validate]
  );
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);

  registerForm = new FormGroup(
    {
      name: this.name,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password,
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  //method to signUp Users......
  async registerUser() {

    this.showAlert = true;

    /* create user method from AuthService.....
        creates user and adds user data to firestore..... */
    await this.auth.createUser(this.registerForm.value as IUser)
          .then((userCredential) => {
            const user = userCredential.user;
            this.alertMsg = 'Congratulations! Account created successfully';
            this.alertColor = 'text-green-500';
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              this.alertMsg = 'Email alrady exist! Try again with a different email.';
            } else {
              this.alertMsg = 'Something went wrong! Please try again later.';
            }
            this.alertColor = 'text-red-500';
          });
  }//end of registerUser()....
}
