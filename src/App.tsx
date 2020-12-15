import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserListPage } from './pages/UserListPage';
import { UserCreatePage } from './pages/UserCreatePage';
import './styles/normalize.css';
import './styles/constants.css';
import './styles/base.css';
import './styles/utils.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user-list">
          <UserListPage />
        </Route>
        <Route path="/user/create">
          <UserCreatePage />
        </Route>
      </Switch>
    </Router>
  );
}
