import { User } from "./User";
import { Category } from "./category";
import { PaginatedResponse } from "./pagination";
import { PostTag } from "./postTag";


//todo aidcionar interface de user e comment
export interface Post {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string | null;
  published: boolean;
  author: User;
  authorId: number;
  categories: Category[];
  postBanner: string
  //comments: Comment[]; // Supondo que Comment é outra interface ou tipo definido
  tags: PostTag[]
}

export interface PostResponse extends PaginatedResponse<Post> {}