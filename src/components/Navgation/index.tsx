import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faFileInvoice, faHome, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'
import Box from '@material-ui/core/Box'
import { css } from '@emotion/css'

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
              className={css`
                & {
                  display: block;
                  padding-left: calc(24px - 4px);
                  color: white;
                  text-decoration: none;
                  border-left: 4px solid transparent;

                  &:hover {
                    margin-right: -10px;
                    background-color: var(--color-primary-dark);
                  }
                }
              `}
              activeClassName={css`
                & {
                  font-weight: bold;
                  border-left: 4px solid white;
                  &:hover {
                    background-color: var(--color-primary-dark);
                    border-left: 4px solid white;
                  }
                }
              `}
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