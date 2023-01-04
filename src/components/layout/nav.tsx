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

const MARKER_WIDTH = 2;
const MARKER_COLOR: React.CSSProperties['color'] = 'white';

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
              className={css({
                display: 'block',
                paddingLeft: 24 - MARKER_WIDTH,
                color: 'white',
                textDecoration: 'none',
                borderLeft: `${MARKER_WIDTH}px solid transparent`,
                '&:hover': {
                  marginRight: -10,
                  backgroundColor: 'var(--color-primary-dark)',
                },
              })}
              activeClassName={css({
                fontWeight: 'bold',
                borderLeft: `${MARKER_WIDTH}px solid ${MARKER_COLOR}`,
                '&:hover': {
                  backgroundColor: 'var(--color-primary-dark)',
                },
              })}
              to={navItem.to}
              exact={navItem.exact}
            >
              <div className={css({ display: 'inline-block', width: 32 })}>
                {navItem.icon}
              </div>
              <div className={css({ display: 'inline-block' })}>
                {navItem.title}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
