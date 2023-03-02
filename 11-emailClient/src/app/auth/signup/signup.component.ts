import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})





export class SignupComponent {

  constructor ( ){

  }

  authForm = new FormGroup({
    username: new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(3),
      Validators.pattern(/^[a-z0-9]+$/) //only numbers and letters
    ]),
    password: new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(4)
    ]),
    confirmPassword: new FormControl("",[
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(4)
    ]),
  });

  ngOnInit() {
    console.log(this.authForm.value)
  }

  onSubmit() {
    console.log(this.authForm.value)
  }
}
