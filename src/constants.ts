export const usersUrl = 'https://5e6736691937020016fed762.mockapi.io/users';

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
