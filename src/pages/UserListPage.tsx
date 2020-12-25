import React from 'react';
import { Container } from '../components/shared/Container';
import { Layout } from '../components/Layout';
import { UserList } from '../components/UserList';

export function UserListPage() {
  return (
    <Layout title="Home">
      <Container>
        <UserList />
      </Container>
    </Layout>
  );
}
