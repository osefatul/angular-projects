import { WikipediaService } from './wikipedia.service';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  pages:any[] = [];

  numbers$ = of([1, 2, 3, 4, 5]);

  ngOnInit(): void {
    this.numbers$.pipe(
      map(number => number.map(num => num*num )),
      map(value => "this is a square number" + value)
    ).subscribe({
      next(value) { console.log(value)},
      error(err) { console.log(err)},
      complete() { console.log("complete it")}
    })
  }


  constructor(private wikipedia: WikipediaService){}
  
  onTerm(term: string): void {
    this.wikipedia.search(term).subscribe((response) => {
      // console.log(response)
      this.pages = response;
    })
  }

}
