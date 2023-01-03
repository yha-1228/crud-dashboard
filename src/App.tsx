import { SkeletonTheme } from 'react-loading-skeleton';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// global styles
import './styles/vars.css';
import './styles/normalize.css';
import './styles/base.css';

// external css
import 'react-loading-skeleton/dist/skeleton.css';

// Pages
import { HomePage } from './pages/HomePage';
import { UserListPage } from './pages/UserListPage';
import { Page01Page } from './pages/Page01Page';
import { Page02Page } from './pages/Page02Page';
import { Page03Page } from './pages/Page03Page';
import { cssProp } from './styles/utils';

const routes = [
  { path: '/', exact: true, children: <HomePage /> },
  { path: '/users', exact: true, children: <UserListPage /> },
  { path: '/page01', exact: true, children: <Page01Page /> },
  { path: '/page02', exact: true, children: <Page02Page /> },
  { path: '/page03', exact: true, children: <Page03Page /> },
];

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
