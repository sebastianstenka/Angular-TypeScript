import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/album';
import { User } from '../model/user';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  users: User[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.albums = this.route.snapshot.data['albumsFromResolver'];
    this.users = this.route.snapshot.data['usersFromResolver'];

    this.merge();
  }

  private merge(): void {
    this.albums.forEach(album => {
      const user = this.users.filter(u => u.id === album.userId)[0];
      album.author = user.name;
    });
    this.filteredAlbums = this.albums;
  }

  changeAlbumList(id: string) {

    if (id == "-1") {
      this.filteredAlbums = this.albums;
    } else if (id == '' || id == null || id == undefined) {
      this.filteredAlbums = this.albums;
    } else {
      this.filteredAlbums = this.albums.filter(album => album.userId.toString() == id);
    }
  }
}
