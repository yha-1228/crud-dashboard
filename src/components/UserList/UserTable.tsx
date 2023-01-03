import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, LinkButton } from '../shared/Button'
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table'
import { Spinner } from '../shared/Spinner'
import { css } from '@emotion/css'
import { User } from '../../types'

type UserTableProps = {
  isLoading: boolean
  users: User[] | undefined
  onDeleteClick: React.ComponentProps<'button'>['onClick']
}

const heights = {
  header: 64,
  footer: 64,
}

const UserTable = React.forwardRef<HTMLDivElement, UserTableProps>((props, ref) => {
  const { users, isLoading, onDeleteClick } = props

  return (
    <>
      {isLoading && (
        // TODO: Do not use spinner
        <div className={css({ paddingTop: 72, textAlign: 'center' })}>
          <Spinner />
        </div>
      )}

      <div
        className={css({
          display: !isLoading ? 'block' : 'none',
          height: `calc(100vh - ${heights.header}px - ${heights.footer}px)`,
          overflow: 'auto',
        })}
        ref={ref}
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
              {users?.map((user) => (
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
                      disabled={!isLoading}
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
      </div>
    </>
  )
})

export default UserTable
