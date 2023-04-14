import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);
