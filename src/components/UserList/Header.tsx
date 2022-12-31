import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainHeader } from '../Layout/MainHeader'
import { LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'

type HeaderProps = {}

export default function Header(props: HeaderProps) {
  return (
    <MainHeader>
      <MainHeading>Users</MainHeading>

      <div>
        <LinkButton variant="primary" to="/users/create">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;&nbsp;New
        </LinkButton>
      </div>
    </MainHeader>
  )
}
