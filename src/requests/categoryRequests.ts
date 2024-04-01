import { Category, CategoryResponse } from "@/interfaces/category";
import { getResource, createResource, updateResource, deleteResource } from "./base";

export const getCategories = async (): Promise<CategoryResponse> => getResource<CategoryResponse>('/categories');
export const getCategoryById = async (id: number): Promise<Category> => getResource<Category>(`/categories/${id}`);
export const createCategory = async (categoryData: Category): Promise<Category> => createResource<Category>('/categories', categoryData);
export const updateCategory = async (id: number, categoryData: Category): Promise<Category> => updateResource<Category>('/categories', id, categoryData);
export const deleteCategory = async (id: number): Promise<void> => deleteResource('/categories', id);

