import './styles/global.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Page01Page } from './pages/page-01-page';
import { Page02Page } from './pages/page-02-page';
import { Page03Page } from './pages/page-03-page';
import { UserListPage } from './pages/user-list-page';
import { cssProp } from './styles/utils';

const routes = [
  { path: '/', exact: true, children: <HomePage /> },
  { path: '/users', exact: true, children: <UserListPage /> },
  { path: '/page01', exact: true, children: <Page01Page /> },
  { path: '/page02', exact: true, children: <Page02Page /> },
  { path: '/page03', exact: true, children: <Page03Page /> },
];

export function App() {
  return (
    <SkeletonTheme
      baseColor={cssProp('color-gray-100')}
      highlightColor={cssProp('color-gray-50')}
    >
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </SkeletonTheme>
  );
}
