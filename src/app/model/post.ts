import { Comment } from "./comment";

export class Post {
  id: string;
  title: string;
  body: string;
  comments: Comment[];
}