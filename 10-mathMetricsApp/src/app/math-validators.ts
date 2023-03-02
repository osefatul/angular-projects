import { AbstractControl } from "@angular/forms";

export class MathValidators {

  static summation (target: string, sourceOne: string, sourceTwo: string){
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];

      console.log(firstNumber, secondNumber, sum)

      //Check if a+b = answer then return no error otherwise add error.
      if(firstNumber + secondNumber === parseInt(sum)){
        return null;
      }
      return {addition: true}
    }
  }
}