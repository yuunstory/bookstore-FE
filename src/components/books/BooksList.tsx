import styled from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';

interface Props {
  books: Book[];
}

function BooksList({ books }: Props) {
  return (
    <BooksListStyle>
      {books?.map((item) => {
        return <BookItem key={item.id} book={item} />;
      })}
    </BooksListStyle>
  );
}

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export default BooksList;
