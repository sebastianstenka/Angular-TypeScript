import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-photo-component',
  templateUrl: './photo-component.html',
  styleUrls: ['./photo-component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo;
  constructor() {

  }

  ngOnInit(): void {

  }

}
