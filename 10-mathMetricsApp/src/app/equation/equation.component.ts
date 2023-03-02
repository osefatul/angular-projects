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
  secondsPerSolution = 0;

  //the second parameter is the validator that will be applied on all form controls.
  mathForm = new FormGroup ({
    a: new FormControl (this.randomNumber()),
    b: new FormControl (this.randomNumber()),
    answer: new FormControl("")
  },
  [
    //parameters need to be strings otherwise won't be passed directly.
    MathValidators.summation("answer", "a", "b")
  ]
  )

  ngOnInit(): void {}

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
