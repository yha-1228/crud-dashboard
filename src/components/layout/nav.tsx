import { css } from '@emotion/css';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

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
];

export function Nav() {
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li
            className={css({
              marginLeft: -24,
              marginRight: -24,
              lineHeight: '40px',
            })}
            key={navItem.title}
          >
            <NavLink
              className={css`
                display: block;
                padding-left: calc(24px - 2px);
                color: white;
                text-decoration: none;
                border-left: 2px solid transparent;

                &:hover {
                  margin-right: -10px;
                  background-color: var(--color-primary-dark);
                }
              `}
              activeClassName={css`
                font-weight: bold;
                border-left: 2px solid white;
                &:hover {
                  background-color: var(--color-primary-dark);
                  border-left: 2px solid white;
                }
              `}
              to={navItem.to}
              exact={navItem.exact}
            >
              <div>
                <div className={css({ display: 'inline-block', width: 32 })}>
                  {navItem.icon}
                </div>
                <div className={css({ display: 'inline-block' })}>
                  {navItem.title}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
