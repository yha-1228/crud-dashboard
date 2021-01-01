import React, { useEffect, useState } from 'react'
import styles from './UserList.module.css'
import { Button, LinkButton } from './shared/Button'
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from './shared/Table'
import { deleteData, getData, usersUrl, wait } from '../constants'
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Box, CircularProgress, LinearProgress } from '@material-ui/core'
import { MuiThemeProvider } from '../lib/material-ui/MuiThemeProvider'
import { User, Users } from '../types'
import { MainHeading } from './shared/Headings'
import { MainContentArea } from './layouts/MainContentArea'
import { MainHeader } from './layouts/MainHeader'

export function UserList({ perPage }: { perPage: number }) {
  const [users, setUsers] = useState<Users>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false)
  const [offset, setOffset] = useState<number>(0)

  const deleteUser = (user: User) => {
    setIsLoaded(false)
    deleteData(`${usersUrl}/${user.id}`).then(() => {
      loadUsersFromServer({ offset: offset, limit: perPage })
    })
  }

  const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
  }

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    setIsPageLoaded(false)
    getData(`${usersUrl}/?_start=${offset}&_limit=${limit}`).then((result) => {
      wait(1400).then(() => {
        setIsLoaded(true)
        setIsPageLoaded(true)
        setUsers(result)
      })
    })
  }

  const handlePageClick = (data: any) => {
    const selected = data.selected
    const offset = Math.ceil(selected * perPage)
    setOffset(offset)
  }

  useEffect(() => {
    getData(usersUrl).then((result) => {
      setTotalCount(result.length)
    })
    loadUsersFromServer({ offset: offset, limit: perPage })
  }, [offset, perPage])

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
                      <TableHeader align="left" scope="col">
                        Username
                      </TableHeader>
                      <TableHeader align="left" scope="col">
                        Email
                      </TableHeader>
                      <TableHeader align="left" scope="col">
                        Country
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
                  previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                  nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                  pageCount={getPageCount(totalCount, perPage)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
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
                <span className={styles.rowsCountNotificationText}>
                  {offset + 1} - {offset + perPage} / {totalCount}
                </span>
              </div>
            </Box>
          </>
        )}
      </MainContentArea>
    </>
  )
}
