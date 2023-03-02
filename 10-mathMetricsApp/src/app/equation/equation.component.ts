import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, AbstractControl} from "@angular/forms"
import { delay, filter, scan } from "rxjs/operators";
import { MathValidators } from '../math-validators';



@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit{
  secondsPerSolution: number = 0;

  //the second parameter is the validator that will be applied on all form controls.
  mathForm = new FormGroup ({
    a: new FormControl (this.randomNumber()),
    b: new FormControl (this.randomNumber()),
    answer: new FormControl("")
  },[
    //parameters need to be strings otherwise won't be passed directly.
    MathValidators.summation("answer", "a", "b")
  ])


  ngOnInit(): void {
    this.mathForm.statusChanges
    .pipe(
      filter(value=> value === 'VALID'),
      delay(100),
      scan((acc, value) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      },
      {numberSolved: 0, startTime: new Date()}
      ))
      .subscribe(({numberSolved, startTime}) => {
      this.secondsPerSolution = ( (new Date().getTime() - startTime.getTime()) / 1000) / numberSolved

      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ""
      })
    })
  }

  get a (){
    return this.mathForm.value.a;
  }

  get b (){
    return this.mathForm.value.b;
  }

  randomNumber (){
    return Math.floor(Math.random()*10)
  }
}
