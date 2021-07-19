import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment/comment.service';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  comments: Comment[];
  defaultId: string;

  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.defaultId = localStorage.getItem('previousSearchId');
  }

  findPosts(userId: string) {
    this.postService.getPostsByUserId(userId).subscribe(response => {
      this.posts = response;
      if (this.posts.length > 0) {
        let postId: string[] = [];
        this.posts.forEach(p => postId.push(p.id));
        this.commentService.getCommentByPostId(postId).subscribe(data => {
          this.comments = data;
          this.merge();
        });
      }
    });
    localStorage.setItem('previousSearchId', userId)
  }

  private merge() {
    this.posts.forEach(post => {
      post.comments = this.comments.filter(com => com.id == post.id);
    });
  }
}
