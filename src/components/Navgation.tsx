import { Box } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navgation.module.css'

const navItems = [
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
        {navItems.map((navItem, index) => (
          <NavItem key={index}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to={navItem.to}
              exact={navItem.exact}
            >
              {navItem.title}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
