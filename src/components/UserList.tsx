import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from '../components/Tables';
import { deleteData, getData, usersUrl, wait } from '../constants';
import ReactPaginate from 'react-paginate';
import '../lib/react-paginate/style.css';

const LIMIT = 10;

export type User = { id: number; username: string; email: string };

export type Users = User[];

export function UserList() {
  const [users, setUsers] = useState<Users>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(10);

  const deleteUser = (user: User) => {
    setIsLoaded(false);
    deleteData(`${usersUrl}/${user.id}`).then(() => {
      loadUsersFromServer({ offset: offset, limit: LIMIT });
    });
  };

  const loadUsersFromServer = ({ offset, limit }: { offset: number; limit: number }) => {
    getData(`${usersUrl}/?_start=${offset}&_limit=${limit}`).then((result) => {
      wait(1200).then(() => {
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
    loadUsersFromServer({ offset: offset, limit: LIMIT });
  }, [offset]);

  useEffect(() => {
    loadUsersFromServer({ offset: offset, limit: LIMIT });
    getData(usersUrl).then((result) => {
      setTotalCount(result.length);
    });
  }, []);

  return (
    <>
      <h1>User List</h1>
      <Link to="/users/create">Add</Link>

      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="ReactPaginate__container"
            pageClassName="ReactPaginate__page"
            activeClassName="ReactPaginate__page--active"
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
