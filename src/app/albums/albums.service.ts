import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) { }

  httpOpctions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
