import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Layout } from '../components/Layout';

type Values = { username: string; email: string };
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
  const [values, setValues] = useState<Values>({ username: '', email: '' });
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

    alert('送信しました！');
  };

  return (
    <Layout title="新規作成">
      <Container>
        <h1>新規作成</h1>
        <form onSubmit={handleSubmit}>
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
            <button type="submit">新規登録</button>
          </div>
        </form>
      </Container>
    </Layout>
  );
}
