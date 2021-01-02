export const usersUrl = 'http://localhost:3001/users'

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getData = async (url: string) => {
  const res = await fetch(url)
  return await res.json()
}

export const postData = async (url: string, data: { [key: string]: any }) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export const putData = async (url: string, data: { [key: string]: any }) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export const deleteData = async (url: string) => {
  const res = await fetch(url, { method: 'DELETE' })
  return await res.json()
}

// React Pagenateのページリンクを最大まで表示するために、最大データ数の取得が必要
export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}
