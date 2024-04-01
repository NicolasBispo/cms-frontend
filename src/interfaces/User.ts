import { Post } from "./post"

export interface User {
  name: string
  email: string
  password: string
  posts: Post[]
  comments: []
}