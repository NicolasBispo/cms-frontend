import { PaginatedResponse } from "./pagination"
import { Post } from "./post"

export interface Category {
  id: number
  name: string
  thumbImage: string
  posts: Post[]
}

export interface CategoryResponse extends PaginatedResponse<Category> {}