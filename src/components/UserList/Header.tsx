import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar } from '../Layout/AppBar';
import { LinkButton } from '../shared/Button';

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <AppBar title="Users">
      <div>
        <LinkButton variant="primary" to="/users/create">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;&nbsp;New
        </LinkButton>
      </div>
    </AppBar>
  );
}
