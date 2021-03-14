import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// global styles
import './styles/colors.css'
import './styles/normalize.css'
import './styles/base.css'
import './styles/utils.css'

// Pages
import { HomePage } from './pages/HomePage'
import { UserListPage } from './pages/UserListPage'
import { Page01Page } from './pages/Page01Page'
import { Page02Page } from './pages/Page02Page'
import { Page03Page } from './pages/Page03Page'

const routes = [
  { path: '/', exact: true, children: <HomePage /> },
  { path: '/users', exact: true, children: <UserListPage /> },
  { path: '/page01', exact: true, children: <Page01Page /> },
  { path: '/page02', exact: true, children: <Page02Page /> },
  { path: '/page03', exact: true, children: <Page03Page /> },
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
