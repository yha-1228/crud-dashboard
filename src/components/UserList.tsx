import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './shared/Button';
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from './shared/Tables';
import { deleteData, getData, usersUrl, wait } from '../constants';
import ReactPaginate from 'react-paginate';
import '../lib/react-paginate/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const LIMIT = 10;

export type User = { id: number; username: string; email: string };

export type Users = User[];

export function UserList() {
  const [users, setUsers] = useState<Users>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const deleteUser = (user: User) => {
    setIsLoaded(false);
    deleteData(`${usersUrl}/${user.id}`).then(() => {
      loadUsersFromServer({ offset: offset, limit: LIMIT });
    });
  };

  const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit);
  };

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    getData(`${usersUrl}/?_start=${offset}&_limit=${limit}`).then((result) => {
      wait(700).then(() => {
        setIsLoaded(true);
        setUsers(result);
      });
    });
  };

  const handlePageClick = (data: any) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * 10);
    setOffset(offset);
  };

  useEffect(() => {
    getData(usersUrl).then((result) => {
      setTotalCount(result.length);
    });
    loadUsersFromServer({ offset: offset, limit: LIMIT });
  }, []);

  useEffect(() => {
    loadUsersFromServer({ offset: offset, limit: LIMIT });
  }, [offset]);

  return (
    <>
      <h1>User List</h1>
      <Link to="/users/create">Add</Link>

      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            pageCount={getPageCount(totalCount, LIMIT)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="ReactPaginate__container"
            pageClassName="ReactPaginate__page"
            pageLinkClassName="ReactPaginate__page-link"
            previousClassName="ReactPaginate__page"
            previousLinkClassName="ReactPaginate__page-link"
            nextClassName="ReactPaginate__page"
            nextLinkClassName="ReactPaginate__page-link"
            breakClassName="ReactPaginate__page"
            activeLinkClassName="ReactPaginate__page-link--active"
          />

          <TableWrapper>
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
                      <Link to={`/users/${user.id}`}>Edit</Link>
                    </TableData>
                    <TableData>
                      <Button type="button" onClick={() => deleteUser(user)} disabled={!isLoaded}>
                        Delete
                      </Button>
                    </TableData>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>
      )}
    </>
  );
}
