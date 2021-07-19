import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from './model/photo';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private dataSource = new Subject<Photo>();
  data = this.dataSource.asObservable();

  addData(value: Photo) {
    this.dataSource.next(value);
  }
}
