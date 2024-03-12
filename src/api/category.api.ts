import { convertToCamelCase } from './../utils/convertSnakeToCamel';
import { Category } from '../models/category.model';
import { httpClient } from './http';

export const fetchCategory = async () => {
  try {
    const response = await httpClient.get<Category[]>('/category');
    return convertToCamelCase(response.data);
  } catch (error) {
    return null;
  }
};
