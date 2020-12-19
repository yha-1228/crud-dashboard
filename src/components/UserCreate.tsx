import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usersUrl } from '../constants';

type Values = { username: string; email: string };

export function UserCreate() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<Values>({ username: '', email: '' });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
        history.push('/users');
      });
  };

  return (
    <>
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
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="email">email</label>
          </div>
          <div>
            <input type="email" name="email" id="email" onChange={handleChange} value={values.email} />
          </div>
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '送信中...' : '新規登録'}
          </button>
        </div>
      </form>
    </>
  );
}
