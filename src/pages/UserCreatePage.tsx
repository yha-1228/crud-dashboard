import React from 'react';
import { Container } from '../components/shared/Container';
import { Layout } from '../components/Layout';
import { UserCreate } from '../components/UserCreate';

export function UserCreatePage() {
  return (
    <Layout title="新規作成">
      <Container>
        <UserCreate />
      </Container>
    </Layout>
  );
}
