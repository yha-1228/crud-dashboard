import { Box } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faFileInvoice, faHome, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    title: 'Home',
    to: '/',
    exact: true,
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Users',
    to: '/users',
    exact: false,
  },
  {
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    title: 'Invoices',
    to: '/invoices',
    exact: true,
  },
  {
    icon: <FontAwesomeIcon icon={faSlidersH} />,
    title: 'Configs',
    to: '/configs',
    exact: true,
  },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    title: 'Site setting',
    to: '/site-setting',
    exact: true,
  },
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
        {navItems.map((navItem, i) => (
          <NavItem key={i}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to={navItem.to}
              exact={navItem.exact}
            >
              {navItem.icon ? (
                <div>
                  <Box display="inline-block" width="32px">
                    {navItem.icon}
                  </Box>
                  <Box display="inline-block">{navItem.title}</Box>
                </div>
              ) : (
                <div>{navItem.title}</div>
              )}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
