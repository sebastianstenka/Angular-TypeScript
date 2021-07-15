import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from '../model/photo';
import { PhotosService } from './photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosResolver implements Resolve<Photo[]> {

  constructor(private photosService: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const id = route.params['id'];
    return this.photosService.getPhotos(id);
  }
}
