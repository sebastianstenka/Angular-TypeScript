import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../model/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('album', JSON.stringify(this.album))
  }

}
