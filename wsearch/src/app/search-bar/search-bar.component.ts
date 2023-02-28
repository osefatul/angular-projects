import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  
  @Output () submitted = new EventEmitter<string>();
  
  
  term = '';

  onSubmit = (event: Event) => {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
