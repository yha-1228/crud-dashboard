import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar } from '../shared/app-bar';
import { LinkButton } from '../shared/button';

export function Header() {
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
