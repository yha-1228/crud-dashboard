import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faCog,
  faFileInvoice,
  faHome,
  faList,
  faSlidersH,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const navItemsNew = [
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
