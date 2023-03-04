import { FormControl } from '@angular/forms';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() control: FormControl | any;
  @Input() label!: string;
  @Input() type!: string;
}
