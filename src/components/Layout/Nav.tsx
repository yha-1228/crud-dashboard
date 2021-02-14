import React from 'react'
import Box from '@material-ui/core/Box'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/css'

const navItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    title: 'Home',
    to: '/',
    exact: true,
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Users',
    to: '/users',
    exact: false,
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page01',
    to: '/page01',
    exact: false,
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page02',
    to: '/page02',
    exact: false,
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page03',
    to: '/page03',
    exact: false,
  },
]

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <Box component="li" mx="-24px" lineHeight="40px">
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
                  padding-left: calc(24px - 2px);
                  color: white;
                  text-decoration: none;
                  border-left: 2px solid transparent;

                  &:hover {
                    margin-right: -10px;
                    background-color: var(--color-primary-dark);
                  }
                }
              `}
              activeClassName={css`
                & {
                  font-weight: bold;
                  border-left: 2px solid white;
                  &:hover {
                    background-color: var(--color-primary-dark);
                    border-left: 2px solid white;
                  }
                }
              `}
              to={navItem.to}
              exact={navItem.exact}
            >
              <div>
                <Box display="inline-block" width="32px">
                  {navItem.icon}
                </Box>
                <Box display="inline-block">{navItem.title}</Box>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
