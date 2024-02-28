import Header from '../common/Header';
import Footer from '../common/Footer';
import { Children } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header></Header>
      <LayoutStyle>{children}</LayoutStyle>
      <Footer></Footer>
    </>
  );
}
const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;
