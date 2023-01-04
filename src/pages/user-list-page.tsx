import React from 'react';
import { Layout } from '../components/layout';
import { UserList } from '../components/user-list';

export function UserListPage() {
  return (
    <Layout title="Users">
      <UserList />
    </Layout>
  );
}
