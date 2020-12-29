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

        {/* test */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
          (_, i) => (
            <li className="Navgation__item">
              <NavLink
                className="Navgation__link"
                activeClassName="Navgation__link--active"
                to="/site-setting"
                exact
              >
                Dummy item {i}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
