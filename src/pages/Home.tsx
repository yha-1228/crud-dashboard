import { kStringMaxLength } from 'buffer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

type User = { id: number; username: string; email: string };

type Users = User[];

export function Home() {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    fetch('https://5e6736691937020016fed762.mockapi.io/users')
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
                  <Link to="/user/:id">詳細</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layout>
  );
}
