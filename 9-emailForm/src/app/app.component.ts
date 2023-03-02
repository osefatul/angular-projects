import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = ""
  email: string = ""

  @ViewChild("DataForm") DataForm!: NgForm


  submit() {
    console.log(
      "This is your name: " + this.name,
      "This is your email: " + this.email
    )

    console.log(this.DataForm.value)
  }
}
