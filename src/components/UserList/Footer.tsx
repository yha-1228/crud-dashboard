import React from 'react'
import Box from '@material-ui/core/Box'
import { Spinner } from '../shared/Spinner'
import { css } from '@emotion/css'
import { HStack } from '../shared/Stack'
import { Paginate } from '../shared/Paginate'

type FooterProps = {
  isLoaded: boolean
  pageCount: number
  limit: number
  onPageChange: (data: any) => void
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Footer(props: FooterProps) {
  const { isLoaded, pageCount, limit, onPageChange, onLimitChange } = props

  return (
    <Box>
      <Box display={isLoaded ? 'none' : 'block'} pt="72px" textAlign="center">
        <Spinner />
      </Box>

      <Box
        display={isLoaded ? 'flex' : 'none'}
        justifyContent="space-between"
        alignItems="center"
        height="64px"
        px="32px"
      >
        <Paginate pageCount={pageCount} onPageChange={onPageChange} />

        <HStack spaceing={8}>
          <Box display="inline-block" pr="8px" fontSize="12px" color="var(--color-gray-500)">
            Rows per page:
          </Box>
          <Box display="inline-block">
            <select
              className={css`
                & {
                  font-size: 12px;
                  color: var(--color-gray-500);
                  cursor: pointer;
                }
              `}
              value={limit}
              onChange={onLimitChange}
            >
              {[10, 20, 30, 50, 100].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}
