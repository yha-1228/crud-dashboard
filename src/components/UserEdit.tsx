import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usersUrl } from '../constants';
import { UserTableForm } from './UserTableForm';
import isEqual from 'lodash/isEqual';

type Values = { id: string | number; username: string; email: string };

export function UserEdit({ id }: { id: string }) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loadedValues, setLoadedValues] = useState<Values>({ id: '', username: '', email: '' });
  const [values, setValues] = useState<Values>({ id: '', username: '', email: '' });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = { id: Number(id), username: values.username, email: values.email };
    const loadedData = { id: Number(id), username: loadedValues.username, email: loadedValues.email };

    if (isEqual(data, loadedData)) {
      alert('変更されていません。');
      return;
    }

    setIsSubmitting(true);

    fetch(`${usersUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        history.push('/users');
      });
  };

  useEffect(() => {
    fetch(`${usersUrl}/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setLoadedValues({ id: Number(result.id), username: result.username, email: result.email });
        setValues({ id: Number(result.id), username: result.username, email: result.email });
      });
  }, [id]);

  return (
    <>
      <h1>編集</h1>
      <UserTableForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        isSubmitting={isSubmitting}
        submitButtonText="更新"
      />
    </>
  );
}
