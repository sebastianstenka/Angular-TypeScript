import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../model/photo';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photo-components',
  templateUrl: './photos-components.component.html',
  styleUrls: ['./photos-components.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) {
    photosService.getPhotos().subscribe((response: Photo[]) =>
      this.photos = response);
  }

  ngOnInit(): void {
  }

}
