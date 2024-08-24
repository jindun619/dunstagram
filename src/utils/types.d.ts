export interface UserDataType {
  id: number;
  name: string;
  birthday: string;
  profileImage: string;
}

export interface PostDataType {
  id?: number;
  images: string[];
  likes: number;
  shares: number;
  content: string;
  date: string;
  author: UserDataType;
  comments: CommentsDataType[];
}

export interface CommentsDataType {
  id: number;
  authorId: number;
  content: string;
  date: string;
  likes: number;
  author: UserDataType;
}
