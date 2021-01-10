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
import { MuiThemeProvider } from '../../lib/material-ui/MuiThemeProvider'
import { Users } from '../../types'
import { MainContentArea } from '../layouts/MainContentArea'
import { MainHeader } from '../layouts/MainHeader'
import { Button, LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'
import { Table, Tbody, Td, Thead, Th, TableContainer } from '../shared/Table'
import styles from './style.module.css'
import { getEndUser, getStartUser, getUserRowNumber } from './functions'
import { getPageCount } from '../../functions'
import { Spinner } from '../shared/Spinner'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress'

type Props = {
  allUsers: Users
  users: Users
  totalCount: number
  isLoaded: boolean
  isPageLoaded: boolean
  offset: number
  limit: number
  isSort: boolean
  sortKey: string
  sortOrder: 'asc' | 'desc' | ''
  selectedPage: number
  onTableHeaderClick: (event: React.MouseEvent<any>) => void
  onDeleteClick: (event: React.MouseEvent<any>) => void
  onPageClick: (data: any) => void
  onLimitSelecterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Component(props: Props) {
  const {
    allUsers,
    users,
    totalCount,
    isLoaded,
    isPageLoaded,
    limit,
    isSort,
    sortKey,
    sortOrder,
    selectedPage,
    onTableHeaderClick,
    onDeleteClick,
    onPageClick,
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
          <Box pt={6} textAlign="center">
            <Spinner />
          </Box>
        ) : (
          <>
            <Box mb="24px">
              <TableContainer>
                <Box height={4}>
                  {!isPageLoaded && (
                    <MuiThemeProvider>
                      <LinearProgress color="primary" />
                    </MuiThemeProvider>
                  )}
                </Box>

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
                        {isSort && sortKey === 'username' && sortOrder === 'asc' && (
                          <FontAwesomeIcon icon={faArrowUp} />
                        )}
                        {isSort && sortKey === 'username' && sortOrder === 'desc' && (
                          <FontAwesomeIcon icon={faArrowDown} />
                        )}
                      </Th>
                      <Th align="left" scope="col" data-header="email" onClick={onTableHeaderClick}>
                        Email{' '}
                        {isSort && sortKey === 'email' && sortOrder === 'asc' && (
                          <FontAwesomeIcon icon={faArrowUp} />
                        )}
                        {isSort && sortKey === 'email' && sortOrder === 'desc' && (
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
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <div>
                <ReactPaginate
                  forcePage={selectedPage}
                  previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                  nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                  pageCount={getPageCount(totalCount, limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={7}
                  onPageChange={onPageClick}
                  containerClassName={styles.ReactPaginate__container}
                  pageClassName={styles.ReactPaginate__page}
                  pageLinkClassName={styles.ReactPaginate__pageLink}
                  previousClassName={styles.ReactPaginate__page}
                  previousLinkClassName={styles.ReactPaginate__pageLink}
                  nextClassName={styles.ReactPaginate__page}
                  nextLinkClassName={styles.ReactPaginate__pageLink}
                  breakClassName={styles.ReactPaginate__page}
                  breakLinkClassName={styles.ReactPaginate__pageLink}
                  activeLinkClassName={styles.ReactPaginate__pageLink_active}
                />
              </div>

              <div>
                <Box display="inline-block" pr="8px" fontSize="12px" color="var(--color-gray-500)">
                  Rows per page:
                </Box>
                <Box display="inline-block">
                  <select
                    className={styles.selectLimit}
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
              </div>

              <div>
                <span className={styles.rowsCountNotificationText}>
                  {`${getUserRowNumber(
                    allUsers,
                    getStartUser(allUsers, users)
                  )} - ${getUserRowNumber(allUsers, getEndUser(allUsers, users))} / ${totalCount}`}
                </span>
              </div>
            </Box>

            {/* DEBUG AREA */}
            {/* <Box p="8px" border="2px solid black">
              <div>
                startUser num=
                {getUserRowNumber(allUsers, getStartUser(allUsers, users))}
              </div>

              <div>
                endUser num=
                {getUserRowNumber(allUsers, getEndUser(allUsers, users))}
              </div>
            </Box> */}
          </>
        )}
      </MainContentArea>
    </>
  )
}
