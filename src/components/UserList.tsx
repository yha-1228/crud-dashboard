import React, { useEffect, useState } from 'react'
import styles from './UserList.module.css'
import { Button, LinkButton } from './shared/Button'
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from './shared/Table'
import { deleteData, getData, usersUrl, wait } from '../constants'
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faEdit,
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons'
import { Box, CircularProgress, LinearProgress } from '@material-ui/core'
import { MuiThemeProvider } from '../lib/material-ui/MuiThemeProvider'
import { Users } from '../types'
import { MainHeading } from './shared/Heading'
import { MainContentArea } from './layouts/MainContentArea'
import { MainHeader } from './layouts/MainHeader'

export function UserList() {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false)

  // offset, limit
  const [offset, setOffset] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)

  // sort
  const [isSort, setIsSort] = useState<boolean>(false)
  const [sortKey, setSortKey] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('')

  // 選択中のページをステートに同期させる
  const [selectedPage, setSelectedPage] = useState<number>(0)

  // React Pagenateのページリンクを最大まで表示するために、最大データ数の取得が必要
  const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
  }

  const loadUsersFromServer = ({
    isSort,
    sortKey,
    sortOrder,
    offset,
    limit,
  }: {
    isSort: boolean
    sortKey: string
    sortOrder: 'asc' | 'desc' | ''
    offset: number
    limit: number
  }) => {
    setIsPageLoaded(false)

    let params: { [key: string]: string } = { _start: offset.toString(), _limit: limit.toString() }

    if (isSort) {
      params = { ...params, _sort: sortKey, _order: sortOrder }
    }

    const urlSearchParams = new URLSearchParams(params)

    getData(`${usersUrl}?${urlSearchParams}`).then((result) => {
      wait(1200).then(() => {
        setIsLoaded(true)
        setIsPageLoaded(true)

        const users = result.map((item: any) => ({
          id: item.id,
          username: item.username,
          email: item.email,
          password: item.password,
          country: item.country,
        }))

        setUsers(users)
      })
    })
  }

  const handleTableHeaderClick = (event: React.MouseEvent<any>) => {
    const header = event.currentTarget.dataset.header as string

    if (!isSort || !(isSort && sortKey === header)) {
      setIsSort(true)
      setSortKey(header)
      setSortOrder('asc')
      return
    }

    if (isSort && sortKey === header && sortOrder === 'asc') {
      setSortOrder('desc')
      return
    }

    if (isSort && sortKey === header && sortOrder === 'desc') {
      setIsSort(false)
      return
    }
  }

  const handleDeleteClick = (event: React.MouseEvent<any>) => {
    const { id, username } = event.currentTarget.dataset

    const isConfirm = window.confirm(`Delete ${username}?`)
    if (!isConfirm) return

    setIsLoaded(false)
    deleteData(`${usersUrl}/${id}`).then(() => {
      loadUsersFromServer({
        isSort: isSort,
        sortKey: sortKey,
        sortOrder: sortOrder,
        offset: offset,
        limit: limit,
      })
    })
  }

  const handlePageClick = (data: any) => {
    const selected = data.selected
    const offset = Math.ceil(selected * limit)
    setSelectedPage(selected)
    setOffset(offset)
  }

  const handleLimitSelecterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(0)
    setOffset(0)
    setLimit(Number(event.target.value))
  }

  useEffect(() => {
    getData(usersUrl).then((result) => {
      setTotalCount(result.length)
    })
    loadUsersFromServer({
      isSort: isSort,
      sortKey: sortKey,
      sortOrder: sortOrder,
      offset: offset,
      limit: limit,
    })
  }, [isSort, sortKey, sortOrder, offset, limit])

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
                        onClick={handleTableHeaderClick}
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
                        onClick={handleTableHeaderClick}
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
                            onClick={handleDeleteClick}
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
                  onPageChange={handlePageClick}
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
                    onChange={handleLimitSelecterChange}
                  >
                    {[5, 10, 20, 30, 40, 50, 100].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </Box>
              </div>

              <div>
                <span className={styles.rowsCountNotificationText}>
                  {`${offset + 1} - ${Math.min(offset + limit, totalCount)} / ${totalCount}`}
                </span>
              </div>
            </Box>
          </>
        )}
      </MainContentArea>
    </>
  )
}
