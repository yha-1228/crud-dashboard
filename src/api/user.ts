export function getData(url: RequestInfo) {
  return fetch(url).then((res) => res.json());
}

export function postData(url: RequestInfo, data: any) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
