import { error } from 'console';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';
import { usersUrl } from '../constants';

type Values = { username: string; email: string };
type Touched = { username: boolean; email: boolean };
type Errors = { username: string; email: string };

function validate(name: 'username' | 'email', value: string) {
  if (name === 'username') {
    let error = '';
    if (!value) {
      error = '必須項目です。';
    } else if (value.length < 5) {
      error = '5文字以上で入力してください。';
    }
    return error;
  }

  if (name === 'email') {
    let error = '';
    if (!value) {
      value = '必須項目です。';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      value = '不正なメールアドレスの形式です。';
    }
    return error;
  }
}

export function UserCreatePage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [values, setValues] = useState<Values>({ username: '', email: '' });
  const [touched, setTouched] = useState<Touched>({ username: false, email: false });
  const [errors, setErrors] = useState<Errors>({
    username: '必須項目です。',
    email: '必須項目です。',
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: validate(event.target.name, event.target.value) });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEveryValid = Object.values(errors).every((error) => error === '');

    if (!isEveryValid) {
      alert(`username: ${errors.username}\nemail:${errors.email}`);
      return;
    }

    const data = { username: values.username, email: values.email };

    setIsSubmitting(true);

    fetch(usersUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        alert('送信しました！');
        setShouldRedirect(true);
      });
  };

  if (shouldRedirect) {
    return <Redirect to="/user-list" />;
  } else {
    return (
      <Layout title="新規作成">
        <Container>
          <h1>新規作成</h1>
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
                  placeholder="5文字以上"
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
                  placeholder="sample@email.com"
                />
              </div>
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '新規登録'}
              </button>
            </div>
          </form>
        </Container>
      </Layout>
    );
  }
}
