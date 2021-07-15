import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlbumsService } from './albums/albums.service';
import { Album } from './model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<Album[]> {

  constructor(private albumsService: AlbumsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album[]> {
    return this.albumsService.getAlbums();
  }
}
