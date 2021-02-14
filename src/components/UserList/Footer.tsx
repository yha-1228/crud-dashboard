import React from 'react'
import Box from '@material-ui/core/Box'
import { css } from '@emotion/css'
import { HStack } from '../shared/Stack'
import { Paginate } from '../shared/Paginate'

type FooterProps = {
  isLoaded: boolean
  totalCount: number
  pageCount: number
  currentPageIndex: number
  limit: number
  onPageChange: (data: any) => void
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Footer(props: FooterProps) {
  const {
    isLoaded,
    totalCount,
    pageCount,
    currentPageIndex,
    limit,
    onPageChange,
    onLimitChange,
  } = props

  const classes = {
    smallText: css({
      fontSize: 14,
      color: 'var(--color-gray-500)',
    }),
  }

  return (
    <Box
      display={isLoaded ? 'flex' : 'none'}
      justifyContent="space-between"
      alignItems="center"
      height="64px"
      px="32px"
      bgcolor="var(--color-gray-100)"
    >
      <Paginate pageCount={pageCount} onPageChange={onPageChange} />

      <HStack spaceing={8}>
        <Box display="inline-block" className={classes.smallText}>
          Rows per page:
        </Box>
        <Box display="inline-block">
          <select className={classes.smallText} value={limit} onChange={onLimitChange}>
            {[10, 20, 30, 50, 100].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </Box>
      </HStack>

      <Box className={classes.smallText}>
        {currentPageIndex * limit + 1}-{Math.min((currentPageIndex + 1) * limit, totalCount)} of{' '}
        {totalCount}
      </Box>
    </Box>
  )
}
