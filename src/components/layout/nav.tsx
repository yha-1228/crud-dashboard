import { css } from '@emotion/react';
import { FaHome, FaList } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { getTheme } from '../../styles/utils';

const navItems = [
  {
    icon: <FaHome />,
    title: 'Home',
    to: '/',
  },
  {
    icon: <FaList />,
    title: 'Users',
    to: '/users',
  },
  {
    icon: <FaList />,
    title: 'Page01',
    to: '/page01',
  },
  {
    icon: <FaList />,
    title: 'Page02',
    to: '/page02',
  },
  {
    icon: <FaList />,
    title: 'Page03',
    to: '/page03',
  },
];

const MARKER_WIDTH = 2;
const MARKER_COLOR: React.CSSProperties['color'] = 'white';

const navLinkStyle = css({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 24 - MARKER_WIDTH,
  color: 'white',
  textDecoration: 'none',
  borderLeft: `${MARKER_WIDTH}px solid transparent`,
  '&:hover': {
    marginRight: -10,
    backgroundColor: getTheme('color', 'primary-dark'),
  },
});

const activeNavLinkStyle = css(navLinkStyle, {
  fontWeight: 'bold',
  borderLeft: `${MARKER_WIDTH}px solid ${MARKER_COLOR}`,
  '&:hover': {
    backgroundColor: getTheme('color', 'primary-dark'),
  },
});

export function Nav() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li
            css={css({
              marginLeft: -24,
              marginRight: -24,
              lineHeight: '40px',
            })}
            key={navItem.title}
          >
            <Link
              to={navItem.to}
              css={
                navItem.to === location.pathname
                  ? activeNavLinkStyle
                  : navLinkStyle
              }
            >
              <div
                css={css({ display: 'flex', alignItems: 'center', width: 32 })}
              >
                {navItem.icon}
              </div>
              <div css={css({ display: 'inline-block' })}>{navItem.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
