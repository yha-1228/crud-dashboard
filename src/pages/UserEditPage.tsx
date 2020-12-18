import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';
import { usersUrl } from '../constants';

type Id = { id: string };

type Values = { id: string | number; username: string; email: string };

export function UserEditPage() {
  let { id } = useParams<Id>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<Values>({ id: '', username: '', email: '' });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = { id: Number(id), username: values.username, email: values.email };

    setIsSubmitting(true);

    fetch(`${usersUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        history.push('/user-list');
      });
  };

  useEffect(() => {
    fetch(`${usersUrl}/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setValues({ id: Number(result.id), username: result.username, email: result.email });
      });
  }, [id]);

  return (
    <Layout title="編集">
      <Container>
        <h1>編集</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <div>
              <label htmlFor="username">username</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={values.username}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email">email</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? '送信中...' : '更新'}
            </button>
          </div>
        </form>
      </Container>
    </Layout>
  );
}
