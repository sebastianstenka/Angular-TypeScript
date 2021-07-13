import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?albumId=1");
  }
}
