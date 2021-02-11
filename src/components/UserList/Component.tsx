import {
  faArrowDown,
  faArrowUp,
  faChevronLeft,
  faChevronRight,
  faEdit,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactPaginate from 'react-paginate'
import { Users } from '../../types'
import { MainContentArea } from '../Layout/MainContentArea'
import { MainHeader } from '../Layout/MainHeader'
import { Button, LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table'
import styles from './style.module.css'
import { Spinner } from '../shared/Spinner'
import Box from '@material-ui/core/Box'
import { css } from '@emotion/css'
import { HStack } from '../shared/Stack'
import { Sort } from '.'

type Props = {
  users: Users
  isLoaded: boolean
  totalCount: number
  pageCount: number
  currentPageIndex: number
  offset: number
  limit: number
  sort: Sort
  onTableHeaderClick: (event: React.MouseEvent<any>) => void
  onDeleteClick: (event: React.MouseEvent<any>) => void
  onPageChange: (data: any) => void
  onLimitSelecterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Component(props: Props) {
  const {
    users,
    totalCount,
    isLoaded,
    pageCount,
    currentPageIndex,
    offset,
    limit,
    sort,
    onTableHeaderClick,
    onDeleteClick,
    onPageChange,
    onLimitSelecterChange,
  } = props

  return (
    <>
      <MainHeader>
        <MainHeading>Users</MainHeading>

        <LinkButton variant="primary" to="/users/create">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;&nbsp;Add
        </LinkButton>
      </MainHeader>

      <MainContentArea>
        {!isLoaded ? (
          <Box pt="72px" textAlign="center">
            <Spinner />
          </Box>
        ) : (
          <div
            style={{
              height: 'calc(100vh - 64px)',
              border: '2px solid #eb425e',
              overflowY: 'scroll',
            }}
          >
            <div>
              totalCount: {totalCount}
              <hr />
              pageCount: {pageCount}
              <hr />
              currentPageIndex: {currentPageIndex}
              <hr />
              offset: {offset}
              <hr />
              limit: {limit}
            </div>
            <hr />

            <TableContainer>
              <Table>
                <Thead>
                  <tr>
                    <Th align="left" scope="col">
                      ID
                    </Th>
                    <Th
                      align="left"
                      scope="col"
                      data-header="username"
                      onClick={onTableHeaderClick}
                    >
                      Username{' '}
                      {sort.active && sort.key === 'username' && sort.order === 'asc' && (
                        <FontAwesomeIcon icon={faArrowUp} />
                      )}
                      {sort.active && sort.key === 'username' && sort.order === 'desc' && (
                        <FontAwesomeIcon icon={faArrowDown} />
                      )}
                    </Th>
                    <Th align="left" scope="col" data-header="email" onClick={onTableHeaderClick}>
                      Email{' '}
                      {sort.active && sort.key === 'email' && sort.order === 'asc' && (
                        <FontAwesomeIcon icon={faArrowUp} />
                      )}
                      {sort.active && sort.key === 'email' && sort.order === 'desc' && (
                        <FontAwesomeIcon icon={faArrowDown} />
                      )}
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

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              height="64px"
              border="2px solid #48ff00"
            >
              <ReactPaginate
                // logics
                forcePage={currentPageIndex}
                pageCount={pageCount}
                onPageChange={onPageChange}
                marginPagesDisplayed={2}
                pageRangeDisplayed={7}
                // labels
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                // styles
                containerClassName={styles.reactPaginate__container}
                pageClassName={styles.reactPaginate__page}
                pageLinkClassName={styles.reactPaginate__pageLink}
                previousClassName={styles.reactPaginate__page}
                previousLinkClassName={styles.reactPaginate__pageLink}
                nextClassName={styles.reactPaginate__page}
                nextLinkClassName={styles.reactPaginate__pageLink}
                breakClassName={styles.reactPaginate__page}
                breakLinkClassName={styles.reactPaginate__pageLink}
                activeLinkClassName={styles.reactPaginate__pageLink_active}
              />

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
                    onChange={onLimitSelecterChange}
                  >
                    {[5, 8, 10, 20, 30, 50, 100].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </Box>
              </HStack>

              <div
                className={css({
                  fontSize: 12,
                  color: 'var(--color-gray-500)',
                })}
              ></div>
            </Box>
          </div>
        )}
      </MainContentArea>
    </>
  )
}
