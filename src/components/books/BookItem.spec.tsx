import React from 'react';
import { getAllByAltText, getByAltText, render } from '@testing-library/react';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';
import { BookStoreThemeProvider } from '../../context/themeContext';

const dummyBook: Book = {
  id: 1,
  title: 'Dummy Book',
  img: 9791188331796,
  category_id: 1,
  summary: 'Dummy Summary',
  author: 'Dummy Author',
  price: 10000,
  likes: 1,
  form: 'paperbook',
  isbn: 'Dummy ISBN',
  detail: 'Dummy Detail',
  pages: 100,
  contents: 'Dummy Contents',
  pubDate: '2021-01-01',
};

describe('BookItem', () => {
  it('렌더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${dummyBook.img}.jpg`
    );
  });
});
