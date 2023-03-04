import { UniqueUsername } from './../validators/unique-username';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { MatchPassword } from '../validators/match-password';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {

  constructor (
    private matchPassword: MatchPassword,
    private uniquePassword: UniqueUsername,
    private auth: AuthService
    ){
      console.log(this.auth.usernameAvailable("new").subscribe(user => console.log(user)))
    }

  authForm = new FormGroup({
    username: new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(3),
      Validators.pattern(/^[a-z0-9]+$/) //only numbers and letters
    ], [this.uniquePassword.validate]),
    password: new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(4)
    ]),
    passwordConfirmation: new FormControl("",[
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(4)
    ]),
  }, {
    validators: [this.matchPassword.validate]
  });

  ngOnInit() {
    // console.log(this.authForm.value)
  }

  onSubmit() {
    console.log(this.authForm.value)
  }
}
