import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: any[] = [];
  openedItemIndex: number = 0;

  onClick (index: number) {
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1
    }else{
      this.openedItemIndex = index;
    }
  }
}
