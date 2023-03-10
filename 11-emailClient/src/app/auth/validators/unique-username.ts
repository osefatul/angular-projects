import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";



@Injectable({
  providedIn: "root"
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors |null> => {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      map(resp => {
        return resp.available? null: {usernameError:true}
      }),
      catchError(err => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}