import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor (private el: ElementRef){}

  @Output() dismiss = new EventEmitter()

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onDismissClick (){
    this.dismiss.emit();
  }
}
