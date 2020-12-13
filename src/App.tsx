import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import { Home } from './pages/Home';
import './styles/normalize.css';
import './styles/constants.css';
import './styles/base.css';
import './styles/utils.css';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
