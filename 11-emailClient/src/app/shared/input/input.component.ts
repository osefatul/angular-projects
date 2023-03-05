import { FormControl } from '@angular/forms';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() type!: string;
  @Input() controlType = "input";
  @Input() control: FormControl | any;
  @Input() label!: string;

  constructor(){}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}


