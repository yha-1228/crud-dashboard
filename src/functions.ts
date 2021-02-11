export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getData(url: string) {
  const res = await fetch(url)
  return await res.json()
}

export async function postData(url: string, data: { [key: string]: any }) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export async function putData(url: string, data: { [key: string]: any }) {
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export async function deleteData(url: string) {
  const res = await fetch(url, { method: 'DELETE' })
  return await res.json()
}
