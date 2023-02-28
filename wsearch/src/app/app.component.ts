import { WikipediaService } from './wikipedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  {

  pages:any[] = [];

  constructor(private wikipedia: WikipediaService){}
  
  onTerm(term: string): void {
    this.wikipedia.search(term).subscribe((response) => {
      // console.log(response)
      this.pages = response;
    })
  }

}
