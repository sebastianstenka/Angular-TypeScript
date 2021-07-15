import { Component, OnInit } from '@angular/core';
import { Photo } from '../model/photo';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photo-components',
  templateUrl: './photos-components.html',
  styleUrls: ['./photos-components.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) {
    photosService.getPhotos(1).subscribe((response: Photo[]) =>
      this.photos = response);
  }

  ngOnInit(): void {
  }

}
