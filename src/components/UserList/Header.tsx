import React from 'react'
import Box from '@material-ui/core/Box'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainHeader } from '../Layout/MainHeader'
import { LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'

type HeaderProps = {
  isLoaded: boolean
}

export default function Header(props: HeaderProps) {
  const { isLoaded } = props

  return (
    <MainHeader>
      <MainHeading>Users</MainHeading>

      <Box display={isLoaded ? 'block' : 'none'}>
        <LinkButton variant="primary" to="/users/create">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; &nbsp; Add
        </LinkButton>
      </Box>
    </MainHeader>
  )
}
