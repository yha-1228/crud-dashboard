import 'react-loading-skeleton/dist/skeleton.css';

import { SkeletonTheme } from 'react-loading-skeleton';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { UserListPage } from './pages/user-list-page';
import { GlobalStyle } from './styles/global-style';
import { getTheme } from './styles/utils';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/users', element: <UserListPage /> },
]);

export function App() {
  return (
    <>
      <GlobalStyle />

      <SkeletonTheme
        baseColor={getTheme('--color-gray-100')}
        highlightColor={getTheme('--color-gray-50')}
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
    </>
  );
}
