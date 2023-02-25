import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})



export class CollectionsHomeComponent {

  data = [
    {name: "james", age: 28, job:'Designer'},
    {name: "Jill", age: 26, job:"Engineer"},
    {name: "Allison", age:28, job:"Manager"}
  ]
  
  headers = [
    {key: "name", label:"Name"},
    {key: "age", label:"Age"},
    {key: "job", label:"Job"}
  ]

}
