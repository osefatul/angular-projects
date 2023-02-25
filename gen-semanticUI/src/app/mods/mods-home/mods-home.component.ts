import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent {

  modalOpen = false;
  
  items = [
    {title:"Why is US called USA?", content: "Because USA is United States of America"},
    {title:"How does it feel to be Software developer?", content: "It feels super great to be a Software Developer"},
    {title:"Angular or React?", content: "Angular is MVC while react is unidirectional"}
  ]

  onClick = () => {
    this.modalOpen = !this.modalOpen;
  }

}
