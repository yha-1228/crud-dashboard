import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';
import { usersUrl } from '../constants';

export type User = { id: number; username: string; email: string };

export type Users = User[];

export function UserListPage() {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((result) => {
        setUsers(
          result.map((v: User) => ({
            id: Number(v.id),
            username: String(v.username),
            email: String(v.email),
          }))
        );
      });
  }, []);

  return (
    <Layout title="Home">
      <Container>
        <h1>User List</h1>
        <Link to="/users/create">新規作成</Link>

        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/${user.id}`}>編集</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layout>
  );
}
