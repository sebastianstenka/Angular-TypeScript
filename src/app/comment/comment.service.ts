import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentByPostId(postId: string[]): Observable<Comment[]> {
    let params = new HttpParams();
    postId.forEach(id => params = params.append('postId', id));
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments', { params: params });
  }
}