import styled from 'styled-components';
import { BookDetail } from '../../models/book.model';
import Button from '../common/Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface Props {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Props) {
  return (
    <LikeButtonStyle size="medium" scheme={book.liked ? 'like' : 'normal'} onClick={onClick}>
      {book.liked ? <FaHeart /> : <FaRegHeart />}
      {book.likes}
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;
  border: 1px solid ${({ theme }) => theme.color.background};
  background-color: white;

  svg {
    // fill: ${({ theme }) => theme.color.primary};
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
