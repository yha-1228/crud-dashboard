import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserListPage } from './pages/UserListPage'
import { UserCreatePage } from './pages/UserCreatePage'
import './styles/normalize.css'
import './styles/constants.css'
import './styles/base.css'
import './styles/utils.css'
import { UserEditPage } from './pages/UserEditPage'
import { HomePage } from './pages/HomePage'

// fa
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { InvoicesPage } from './pages/InvoicesPage'
import { ConfigsPage } from './pages/ConfigsPage'
import { SiteSettingPage } from './pages/SiteSettingPage'
config.autoAddCss = false

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/users" exact>
          <UserListPage />
        </Route>
        <Route path="/users/create">
          <UserCreatePage />
        </Route>
        <Route path="/users/:id">
          <UserEditPage />
        </Route>

        <Route path="/invoices" exact>
          <InvoicesPage />
        </Route>

        <Route path="/configs" exact>
          <ConfigsPage />
        </Route>

        <Route path="/site-setting" exact>
          <SiteSettingPage />
        </Route>
      </Switch>
    </Router>
  )
}
