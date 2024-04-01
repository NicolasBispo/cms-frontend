// Função genérica para fazer uma requisição GET
import { apiClient } from '@/config/apiClient';
import { QueryParams } from '@/interfaces/requests';
import { AxiosResponse } from 'axios';

export const getResource = async <T>(resource: string, queryParams?: QueryParams): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(resource, { params: queryParams });
    return response.data;
  } catch (error) {
    throw handleRequestError(`fetching ${resource}`, error);
  }
};

// Função genérica para fazer uma requisição POST
export const createResource = async <T>(resource: string, data: T): Promise<T> => {
  try {
    const response = await apiClient.post(resource, data);
    return response.data;
  } catch (error) {
    throw handleRequestError(`creating ${resource}`, error);
  }
};

// Função genérica para fazer uma requisição PUT
export const updateResource = async <T>(resource: string, id: number, data: T): Promise<T> => {
  try {
    const response = await apiClient.put(`${resource}/${id}`, data);
    return response.data;
  } catch (error) {
    throw handleRequestError(`updating ${resource}`, error);
  }
};

// Função genérica para fazer uma requisição DELETE
export const deleteResource = async (resource: string, id: number): Promise<void> => {
  try {
    await apiClient.delete(`${resource}/${id}`);
  } catch (error) {
    throw handleRequestError(`deleting ${resource}`, error);
  }
};

const handleRequestError = (operation: string, error: any): Error => {
  if (error.response && error.response.data && error.response.data.message) {
    return new Error(`Error ${operation}: ${error.response.data.message}`);
  }
  return new Error(`Error ${operation}: ${error.message}`);
};