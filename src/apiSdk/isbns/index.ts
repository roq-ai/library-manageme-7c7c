import axios from 'axios';
import queryString from 'query-string';
import { IsbnInterface, IsbnGetQueryInterface } from 'interfaces/isbn';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIsbns = async (query?: IsbnGetQueryInterface): Promise<PaginatedInterface<IsbnInterface>> => {
  const response = await axios.get('/api/isbns', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createIsbn = async (isbn: IsbnInterface) => {
  const response = await axios.post('/api/isbns', isbn);
  return response.data;
};

export const updateIsbnById = async (id: string, isbn: IsbnInterface) => {
  const response = await axios.put(`/api/isbns/${id}`, isbn);
  return response.data;
};

export const getIsbnById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/isbns/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteIsbnById = async (id: string) => {
  const response = await axios.delete(`/api/isbns/${id}`);
  return response.data;
};
