export interface User {
  id: string;
  profileImage: string;
}

export interface Comment {
  author: User;
  content: string;
  date: string;
  likes: number;
}
