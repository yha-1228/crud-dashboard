import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navgation.css'

export function Navgation() {
  return (
    <nav>
      <ul>
        <li className="Navgation__item">
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li className="Navgation__item">
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/invoices"
            exact
          >
            Invoices
          </NavLink>
        </li>
        <li className="Navgation__item">
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/configs"
            exact
          >
            Configs
          </NavLink>
        </li>
        <li className="Navgation__item">
          <NavLink
            className="Navgation__link"
            activeClassName="Navgation__link--active"
            to="/site-setting"
            exact
          >
            Site setting
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
