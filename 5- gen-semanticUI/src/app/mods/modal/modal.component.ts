import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit  {

  @Output() close = new EventEmitter();

  constructor(public el: ElementRef){
    console.log(el.nativeElement)
  }

  ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement)
  }

  onClose(): void {
    this.close.emit()
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
