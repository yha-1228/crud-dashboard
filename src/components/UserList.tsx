import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Table, TableBody, TableData, TableHead, TableHeader, TableWrapper } from '../components/Tables';
import { usersUrl, wait } from '../constants';

export type User = { id: number; username: string; email: string };

export type Users = User[];

export function UserList() {
  const [users, setUsers] = useState<Users>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const deleteUser = (user: User) => {
    setIsLoaded(false);
    fetch(`${usersUrl}/${user.id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(() => {
        loadUsers();
      });
  };

  const loadUsers = () => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((result) => {
        wait(700).then(() => {
          setIsLoaded(true);
          setUsers(
            result.map((v: User) => ({
              id: Number(v.id),
              username: String(v.username),
              email: String(v.email),
            }))
          );
        });
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Container>
        <h1>User List</h1>
        <Link to="/users/create">新規作成</Link>

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
      </Container>
    </>
  );
}
