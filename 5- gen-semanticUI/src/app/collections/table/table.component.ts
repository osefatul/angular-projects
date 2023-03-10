import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit{
  
  @Input() className = "";
  @Input () headers: any[] = [];
  @Input () data: any[] = [];

  ngOnInit(): void {
    console.log(this.data, this.headers)
  }

}
