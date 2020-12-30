import { Box } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navgation.css'

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <Box component="li" mr="-24px" ml="-24px" lineHeight="40px">
      {children}
    </Box>
  )
}

export function Navgation() {
  return (
    <nav>
      <ul>
        <NavItem>
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/"
            exact
          >
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/users"
          >
            Users
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/invoices"
            exact
          >
            Invoices
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/configs"
            exact
          >
            Configs
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/site-setting"
            exact
          >
            Site setting
          </NavLink>
        </NavItem>
      </ul>
    </nav>
  )
}
