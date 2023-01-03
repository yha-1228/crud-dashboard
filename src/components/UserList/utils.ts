export const calcOffset = (pageIndex: number, limit: number | string) => {
  limit = Number(limit)

  return Math.ceil(pageIndex * limit)
}

export const calcPageCount = (totalCount: number, limit: number | string) => {
  limit = Number(limit)

  return Math.ceil(totalCount / limit)
}
