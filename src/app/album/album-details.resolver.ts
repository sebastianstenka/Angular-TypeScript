import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlbumsService } from '../albums/albums.service';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsResolver implements Resolve<Album> {

  constructor(private albumService: AlbumsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Album> {
    const id = route.params['id'];
    return this.albumService.getAlbum(id);
  }
}
