export interface Book {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  author: string;
  isbn: string;
  pages: number;
  summary: string;
  detail: string;
  contents: string;
  price: number;
  likes: number;
  pub_date: string;
}

export interface BookDetail extends Book {
  category_name: string;
  liked: boolean;
}
