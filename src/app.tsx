import { SkeletonTheme } from 'react-loading-skeleton';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Page01Page } from './pages/page-01-page';
import { Page02Page } from './pages/page-02-page';
import { Page03Page } from './pages/page-03-page';
import { UserListPage } from './pages/user-list-page';
import { GlobalStyle } from './styles/global-style';
import { getTheme } from './styles/utils';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/page01', element: <Page01Page /> },
  { path: '/page02', element: <Page02Page /> },
  { path: '/page03', element: <Page03Page /> },
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
