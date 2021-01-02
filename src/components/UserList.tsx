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
  faSortAmountUpAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Box, CircularProgress, LinearProgress } from '@material-ui/core'
import { MuiThemeProvider } from '../lib/material-ui/MuiThemeProvider'
import { User, Users } from '../types'
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
  const [sortBy, setSortBy] = useState<string>('')

  // 選択中のページをステートに同期させる
  const [selectedPage, setSelectedPage] = useState<number>(0)

  const deleteUser = (user: User) => {
    const isConfirm = window.confirm(`Delete ${user.username}?`)
    if (!isConfirm) return

    setIsLoaded(false)
    deleteData(`${usersUrl}/${user.id}`).then(() => {
      loadUsersFromServer({ isSort: isSort, sortBy: sortBy, offset: offset, limit: limit })
    })
  }

  // React Pagenateのページリンクを最大まで表示するために、最大データ数の取得が必要
  const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
  }

  const loadUsersFromServer = ({
    isSort,
    sortBy,
    offset,
    limit,
  }: {
    isSort: boolean
    sortBy: string
    offset: number
    limit: number
  }) => {
    setIsPageLoaded(false)

    let params: { [key: string]: string } = {
      _start: offset.toString(),
      _limit: limit.toString(),
    }

    if (isSort) {
      params = { ...params, _sort: sortBy }
    }

    const urlSearchParams = new URLSearchParams(params)

    getData(`${usersUrl}?${urlSearchParams}`).then((result) => {
      wait(700).then(() => {
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

  const handlePageClick = (data: any) => {
    const selected = data.selected
    const offset = Math.ceil(selected * limit)
    setSelectedPage(selected)
    setOffset(offset)
  }

  useEffect(() => {
    getData(usersUrl).then((result) => {
      setTotalCount(result.length)
    })
    loadUsersFromServer({ isSort: isSort, sortBy: sortBy, offset: offset, limit: limit })
  }, [isSort, sortBy, offset, limit])

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
              <CircularProgress size={30} thickness={5} />
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
                        onClick={() => {
                          if (isSort && sortBy === 'username') {
                            setIsSort(false)
                            setSortBy('')
                          } else {
                            setIsSort(true)
                            setSortBy('username')
                          }
                        }}
                      >
                        Username{' '}
                        {isSort && sortBy === 'username' && (
                          <FontAwesomeIcon icon={faSortAmountUpAlt} />
                        )}
                      </TableHeader>
                      <TableHeader
                        align="left"
                        scope="col"
                        onClick={() => {
                          if (isSort && sortBy === 'email') {
                            setIsSort(false)
                            setSortBy('')
                          } else {
                            setIsSort(true)
                            setSortBy('email')
                          }
                        }}
                      >
                        Email{' '}
                        {isSort && sortBy === 'email' && (
                          <FontAwesomeIcon icon={faSortAmountUpAlt} />
                        )}
                      </TableHeader>
                      <TableHeader
                        align="left"
                        scope="col"
                        onClick={() => {
                          if (isSort && sortBy === 'country') {
                            setIsSort(false)
                            setSortBy('')
                          } else {
                            setIsSort(true)
                            setSortBy('country')
                          }
                        }}
                      >
                        Country{' '}
                        {isSort && sortBy === 'country' && (
                          <FontAwesomeIcon icon={faSortAmountUpAlt} />
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
                        <TableData>{user.country}</TableData>
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
                            onClick={() => deleteUser(user)}
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
                <Box className={styles.selectLimit} display="inline-block" pr="8px">
                  Rows per page:
                </Box>
                <Box display="inline-block">
                  <select
                    className={styles.selectLimit}
                    value={limit}
                    onChange={(event) => {
                      setSelectedPage(0)
                      setOffset(0)
                      setLimit(Number(event.target.value))
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                  </select>
                </Box>
              </div>

              <div>
                <span className={styles.rowsCountNotificationText}>
                  {offset + 1} - {offset + limit} / {totalCount}
                </span>
              </div>
            </Box>
          </>
        )}
      </MainContentArea>
    </>
  )
}
