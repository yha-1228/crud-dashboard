import { FaPlus } from 'react-icons/fa';
import { AppBar } from '../shared/app-bar';
import { LinkButton } from '../shared/button';

export function Header() {
  return (
    <AppBar title="Users">
      <div>
        <LinkButton variant="primary" to="/users/create">
          <FaPlus />
          &nbsp;&nbsp;New
        </LinkButton>
      </div>
    </AppBar>
  );
}
