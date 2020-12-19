import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

export function HomePage() {
  return (
    <Layout title="Home">
      <Container>
        <h1>Home</h1>
        <Card variant="primary">CSS MODULES</Card>
        <Card variant="warn">CSS MODULES</Card>
        <Link to="/users">ユーザー一覧</Link>
      </Container>
    </Layout>
  );
}
