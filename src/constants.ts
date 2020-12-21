export const usersUrl = 'http://localhost:3001/users';

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getData = (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const postData = (url: string, data: { [key: string]: any }) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const putData = (url: string, data: { [key: string]: any }) => {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const deleteData = (url: string) => {
  return fetch(url, { method: 'DELETE' }).then((res) => res.json());
};
