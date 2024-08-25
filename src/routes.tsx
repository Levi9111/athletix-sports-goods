import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/AboutUs/AboutUs';
import AllProducts from './pages/AllProducts/AllProducts';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Chekout';
import HomePage from './pages/HomePage/HomePage';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import SingleProducts from './pages/SingleProduct/SingleProducts';
import Login from './pages/Registration/Login';
import SignUp from './pages/Registration/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'all-products',
        element: <AllProducts />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'manage-products',
        element: <ManageProducts />,
      },
      {
        path: 'single-product',
        element: <SingleProducts />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);
