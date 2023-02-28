import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search (term: string) {

    return this.http.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action:'query',
        srsearch:term,
        utf8:'1',
        list:'search',
        format:'json',
        origin: "*"
      }
    })
  }
}
