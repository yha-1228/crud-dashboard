import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// global styles
import './styles/colors.css'
import './styles/normalize.css'
import './styles/base.css'
import './styles/utils.css'

// Pages
import { UserEditPage } from './pages/UserEditPage'
import { HomePage } from './pages/HomePage'
import { UserListPage } from './pages/UserListPage'
import { UserCreatePage } from './pages/UserCreatePage'
import { Page01Page } from './pages/Page01Page'
import { Page02Page } from './pages/Page02Page'
import { Page03Page } from './pages/Page03Page'

const routes = [
  { path: '/', exact: true, component: HomePage },
  { path: '/users', exact: true, component: UserListPage },
  { path: '/users/create', exact: true, component: UserCreatePage },
  { path: '/users/:id', exact: true, component: UserEditPage },
  { path: '/page01', exact: true, component: Page01Page },
  { path: '/page02', exact: true, component: Page02Page },
  { path: '/page03', exact: true, component: Page03Page },
]

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </HelmetProvider>
  )
}
