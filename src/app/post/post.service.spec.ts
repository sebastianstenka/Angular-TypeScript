import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { Post } from '../model/post';

describe('PostService', () => {
  let service: PostService;
  let http: HttpClient;
  let posts: Post[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    });
    http = TestBed.inject(HttpClient)
    service = new PostService(http);

    posts = [
      { id: '1', title: 'title1', body: 'body1', comments: null },
      { id: '2', title: 'title2', body: 'body2', comments: null }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should return data on getPostByUserId', () => {
    beforeEach(
      () => {
        spyOn(http, 'get').and.returnValue(of(posts));
      }
    );

    it('should return data as array of posts', () => {
      service.getPostsByUserId('1').subscribe(response => {
        expect(response[0] instanceof Post).toBeTrue();
      });
    })
  })
});
