import { styled } from 'styled-components';
import logo from '../../assets/images/logo.png';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import InputText from './InputText';
import { Link } from 'react-router-dom';

const CATEGORY = [
  {
    id: null,
    name: '전체',
  },
  {
    id: 0,
    name: '인문',
  },
  {
    id: 1,
    name: '시/에세이',
  },
  {
    id: 2,
    name: '경제/경영',
  },
  {
    id: 3,
    name: '건강',
  },
  {
    id: 4,
    name: '소설',
  },
  {
    id: 5,
    name: '역사/문화',
  },
  {
    id: 6,
    name: '요리',
  },
];

function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <h1 className="logo">
          <img src={logo} alt="book store" />
        </h1>
      </Link>

      <nav className="category">
        <ul>
          {CATEGORY.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.id === null ? `/books` : `/books?category_id=${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="auth">
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt />
              로그인
            </Link>
          </li>
          <li>
            <a href="/signup">
              <FaRegUser />
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 240px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;

      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};
          display: flex;
          align-item: center;
          line-height: 1;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
