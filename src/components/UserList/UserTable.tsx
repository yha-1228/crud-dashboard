import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Users } from '../../types'
import { Button, LinkButton } from '../shared/Button'
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table'
import Box from '@material-ui/core/Box'

type UserTableProps = {
  isLoaded: boolean
  users: Users
  onDeleteClick: (event: React.MouseEvent<any>) => void
}

const heights = {
  header: 64,
  footer: 64,
}

export default function UserTable(props: UserTableProps) {
  const { users, isLoaded, onDeleteClick } = props

  return (
    <Box
      display={isLoaded ? 'block' : 'none'}
      height={`calc(100vh - ${heights.header}px - ${heights.footer}px)`}
      overflow="auto"
    >
      <TableContainer style={{ paddingLeft: 32, paddingRight: 32 }}>
        <Table>
          <Thead>
            <tr>
              <Th align="left" scope="col">
                ID
              </Th>
              <Th align="left" scope="col" data-header="username">
                Username
              </Th>
              <Th align="left" scope="col" data-header="email">
                Email
              </Th>
              <Th align="left" scope="col"></Th>
              <Th align="left" scope="col"></Th>
            </tr>
          </Thead>

          <Tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <LinkButton size="small" to={`/users/${user.id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                    &nbsp; &nbsp; Edit
                  </LinkButton>
                </Td>
                <Td>
                  <Button
                    size="small"
                    type="button"
                    data-id={user.id}
                    data-username={user.username}
                    onClick={onDeleteClick}
                    disabled={!isLoaded}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp; &nbsp; Delete
                  </Button>
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
