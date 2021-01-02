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
import { Box, CircularProgress, LinearProgress } from '@material-ui/core'
import React from 'react'
import ReactPaginate from 'react-paginate'
import { getPageCount } from '../../constants'
import { MuiThemeProvider } from '../../lib/material-ui/MuiThemeProvider'
import { Users } from '../../types'
import { MainContentArea } from '../layouts/MainContentArea'
import { MainHeader } from '../layouts/MainHeader'
import { Button, LinkButton } from '../shared/Button'
import { MainHeading } from '../shared/Heading'
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from '../shared/Table'
import styles from './style.module.css'

type Props = {
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
    users,
    totalCount,
    isLoaded,
    isPageLoaded,
    offset,
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
            <MuiThemeProvider>
              <CircularProgress size={32} thickness={5} />
            </MuiThemeProvider>
          </Box>
        ) : (
          <>
            <Box mb="24px">
              <TableWrapper>
                <Box height={4}>
                  {!isPageLoaded && (
                    <MuiThemeProvider>
                      <LinearProgress color="primary" />
                    </MuiThemeProvider>
                  )}
                </Box>

                <Table>
                  <TableHead>
                    <tr>
                      <TableHeader align="left" scope="col">
                        ID
                      </TableHeader>
                      <TableHeader
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
                      </TableHeader>
                      <TableHeader
                        align="left"
                        scope="col"
                        data-header="email"
                        onClick={onTableHeaderClick}
                      >
                        Email{' '}
                        {isSort && sortKey === 'email' && sortOrder === 'asc' && (
                          <FontAwesomeIcon icon={faArrowUp} />
                        )}
                        {isSort && sortKey === 'email' && sortOrder === 'desc' && (
                          <FontAwesomeIcon icon={faArrowDown} />
                        )}
                      </TableHeader>
                      <TableHeader align="left" scope="col"></TableHeader>
                      <TableHeader align="left" scope="col"></TableHeader>
                    </tr>
                  </TableHead>

                  <TableBody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <TableData>{user.id}</TableData>
                        <TableData>{user.username}</TableData>
                        <TableData>{user.email}</TableData>
                        <TableData>
                          <LinkButton size="small" to={`/users/${user.id}`}>
                            <FontAwesomeIcon icon={faEdit} />
                            &nbsp;&nbsp;Edit
                          </LinkButton>
                        </TableData>
                        <TableData>
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
                        </TableData>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </TableWrapper>
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
                <span>totalCount: {totalCount}</span>

                <hr />

                <span className={styles.rowsCountNotificationText}>
                  {`${offset + 1} - ${Math.min(offset + limit, totalCount)} / ${totalCount}`}
                </span>

                <hr />

                <RowsCountText
                  isPageLoaded={isPageLoaded}
                  offset={offset}
                  limit={limit}
                  totalCount={totalCount}
                />
              </div>
            </Box>
          </>
        )}
      </MainContentArea>
    </>
  )
}

type RowsCountTextProps = {
  isPageLoaded: boolean
  offset: number
  limit: number
  totalCount: number
}

function RowsCountText({ isPageLoaded, offset, limit, totalCount }: RowsCountTextProps) {
  return (
    <>
      {isPageLoaded ? (
        <span className={styles.rowsCountNotificationText}>
          {`${offset + 1} - ${Math.min(offset + limit, totalCount)} / ${totalCount}`}
        </span>
      ) : (
        <span></span>
      )}
    </>
  )
}
