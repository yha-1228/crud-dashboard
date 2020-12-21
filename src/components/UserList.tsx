import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from '../components/Tables';
import { deleteData, getData, usersUrl, wait } from '../constants';

export type User = { id: number; username: string; email: string };

export type Users = User[];

export function UserList() {
  const [users, setUsers] = useState<Users>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const deleteUser = (user: User) => {
    setIsLoaded(false);
    deleteData(`${usersUrl}/${user.id}`).then(() => {
      loadUsers(0, 10);
    });
  };

  const loadUsers = (start: number, limit: number) => {
    getData(`${usersUrl}/?_start=${start}&_limit=${limit}`).then((result) => {
      wait(600).then(() => {
        setIsLoaded(true);
        setUsers(result);
      });
    });
  };

  useEffect(() => {
    loadUsers(0, 10);
  }, []);

  return (
    <>
      <h1>User List</h1>
      <Link to="/users/create">新規作成</Link>

      {!isLoaded ? (
        <div>読み込み中...</div>
      ) : (
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
                    <Link to={`/users/${user.id}`}>編集</Link>
                  </TableData>
                  <TableData>
                    <Button type="button" onClick={() => deleteUser(user)} disabled={!isLoaded}>
                      削除
                    </Button>
                  </TableData>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      )}
    </>
  );
}
