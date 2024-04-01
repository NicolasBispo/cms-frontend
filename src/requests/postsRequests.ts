import { Post, PostResponse } from "@/interfaces/post";
import { getResource, createResource, updateResource, deleteResource } from "./base";
import { QueryParams } from "@/interfaces/requests";

export const getPosts = async (params? : QueryParams ): Promise<PostResponse> => await getResource<PostResponse>('/posts', params);
export const getTrendingPost = async (): Promise<Post> => await getResource<Post>("/posts/trending")
export const getPostById = async (id: number): Promise<Post> => await getResource<Post>(`/posts/${id}`);
export const createPost = async (postData: Post): Promise<Post> => await createResource<Post>('/posts', postData);
export const updatePost = async (id: number, postData: Post): Promise<Post> => await updateResource<Post>('/posts', id, postData);
export const deletePost = async (id: number): Promise<void> => await deleteResource('/posts', id);