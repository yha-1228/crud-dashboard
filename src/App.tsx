import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// global styles
import './styles/colors.css'
import './styles/normalize.css'
import './styles/base.css'
import './styles/utils.css'

// Pages
import { InvoicesPage } from './pages/InvoicesPage'
import { ConfigsPage } from './pages/ConfigsPage'
import { SiteSettingPage } from './pages/SiteSettingPage'
import { UserEditPage } from './pages/UserEditPage'
import { HomePage } from './pages/HomePage'
import { UserListPage } from './pages/UserListPage'
import { UserCreatePage } from './pages/UserCreatePage'

const routes = [
  { path: '/', exact: true, component: <HomePage /> },
  { path: '/users', exact: true, component: <UserListPage /> },
  { path: '/users/create', exact: true, component: <UserCreatePage /> },
  { path: '/users/:id', exact: true, component: <UserEditPage /> },
  { path: '/invoices', exact: true, component: <InvoicesPage /> },
  { path: '/configs', exact: true, component: <ConfigsPage /> },
  { path: '/site-setting', exact: true, component: <SiteSettingPage /> },
]

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}
