import { StringLiteral } from 'typescript';

export interface Book {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  author: string;
  isbn: number;
  pages: number;
  summary: string;
  detail: string;
  contents: string;
  price: number;
  likes: number;
  liked: boolean;
  pubDate: string;
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}
