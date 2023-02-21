import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput (event: Event): void {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if(!enteredLetter) return "Pending";
    return randomLetter === enteredLetter ? "Correct": "Incorrect";
  }
  
}
