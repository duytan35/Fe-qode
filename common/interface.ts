export interface Comment {
  id: string;
  username: string;
  content: string;
}

export interface Post {
  id: string;
  comments: Comment[];
  imageId: string;
}
