import { Box } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navgation.css'

const items = [
  { title: 'Home', to: '/', exact: true },
  { title: 'Users', to: '/users', exact: false },
  { title: 'Invoices', to: '/invoices', exact: true },
  { title: 'Configs', to: '/configs', exact: true },
  { title: 'Site setting', to: '/site-setting', exact: true },
]

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
        {items.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              className="Navgation__link"
              activeClassName="Navgation__link--active"
              to={item.to}
              exact={item.exact}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
