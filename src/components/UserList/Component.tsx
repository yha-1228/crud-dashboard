import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Users } from '../../types'
import { MainHeader } from '../Layout/MainHeader'
import { Button, LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table'
import { Spinner } from '../shared/Spinner'
import Box from '@material-ui/core/Box'
import { css } from '@emotion/css'
import { HStack } from '../shared/Stack'
import { Paginate } from '../shared/Paginate'

type Props = {
  users: Users
  isLoaded: boolean
  totalCount: number
  pageCount: number
  currentPageIndex: number
  offset: number
  limit: number
  onDeleteClick: (event: React.MouseEvent<any>) => void
  onPageChange: (data: any) => void
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Component(props: Props) {
  const { users, isLoaded, pageCount, limit, onDeleteClick, onPageChange, onLimitChange } = props

  return (
    <>
      <MainHeader>
        <MainHeading>Users</MainHeading>

        <Box display={isLoaded ? 'block' : 'none'}>
          <LinkButton variant="primary" to="/users/create">
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;&nbsp;Add
          </LinkButton>
        </Box>
      </MainHeader>

      <Box>
        <Box display={isLoaded ? 'none' : 'block'} pt="72px" textAlign="center">
          <Spinner />
        </Box>

        <Box
          display={isLoaded ? 'block' : 'none'}
          height="calc(100vh - 64px - 64px)"
          border="2px solid black"
          overflow="auto"
          id="table-box"
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
                        &nbsp;&nbsp;Edit
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
                        &nbsp;&nbsp;Delete
                      </Button>
                    </Td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          display={isLoaded ? 'flex' : 'none'}
          justifyContent="space-between"
          alignItems="center"
          height="64px"
          px="32px"
          border="2px solid #e04cfd"
        >
          <Paginate pageCount={pageCount} onPageChange={onPageChange} />

          <HStack spaceing={8}>
            <Box display="inline-block" pr="8px" fontSize="12px" color="var(--color-gray-500)">
              Rows per page:
            </Box>
            <Box display="inline-block">
              <select
                className={css`
                  & {
                    font-size: 12px;
                    color: var(--color-gray-500);
                    cursor: pointer;
                  }
                `}
                value={limit}
                onChange={onLimitChange}
              >
                {[10, 20, 30, 50, 100].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  )
}
