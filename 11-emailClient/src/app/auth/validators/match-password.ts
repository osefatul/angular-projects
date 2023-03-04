import {AbstractControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";
import {Injectable} from '@angular/core';


@Injectable({ providedIn: "root" })
export class MatchPassword implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors|null {
    // console.log(control)

    const { password, passwordConfirmation } = control.value;
    if (password === passwordConfirmation) {
      return null;
    }
    else {
      return { passwordsDoNotMatch: true };
    }
  }
}
