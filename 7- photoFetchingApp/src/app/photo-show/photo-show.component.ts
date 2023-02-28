import { PhotoServiceService } from './../photo-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.scss']
})
export class PhotoShowComponent {

  photoUrl: string = "";

  constructor(private photo: PhotoServiceService){}

  onClick = () =>{
    this.fetchPhoto()
  }

  fetchPhoto()  {
    this.photo.getPhoto().subscribe(response =>{
      this.photoUrl = response.urls.regular;
    })
  }
}
