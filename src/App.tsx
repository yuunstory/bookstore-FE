import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/common/Error';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderList from './pages/OrderList';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },

  {
    path: '/signup',
    element: (
      <Layout>
        <Signup></Signup>
      </Layout>
    ),
  },
  {
    path: '/reset',
    element: (
      <Layout>
        <ResetPassword></ResetPassword>
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login></Login>
      </Layout>
    ),
  },
  {
    path: '/books',
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: '/books/:bookId',
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/order',
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: '/orderlist',
    element: (
      <Layout>
        <OrderList />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
