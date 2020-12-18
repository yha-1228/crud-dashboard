import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

export function HomePage() {
  return (
    <Layout title="Home">
      <Container>
        <h1>Home</h1>
        <Link to="/users">ユーザー一覧</Link>
      </Container>
    </Layout>
  );
}
