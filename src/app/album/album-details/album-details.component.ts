import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/model/album';
import { Photo } from 'src/app/model/photo';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;
  user: User;
  photos: Photo[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.album = this.route.snapshot.data['albumDetailsFromResolver'];

    this.album = JSON.parse(localStorage.getItem('album'));


    this.user = this.route.snapshot.data['userFromResolver'];
    this.photos = this.route.snapshot.data['photosFromResolver'];


  }

}
