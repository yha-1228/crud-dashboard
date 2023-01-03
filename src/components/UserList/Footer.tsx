import React from 'react'
import { css } from '@emotion/css'
import { HStack } from '../shared/Stack'
import { Paginate } from '../shared/Paginate'

type FooterProps = {
  totalCount: number
  pageCount: number
  currentPageIndex: number
  limit: number
  onPageChange: React.ComponentProps<typeof Paginate>['onPageChange']
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Footer(props: FooterProps) {
  const { totalCount, pageCount, currentPageIndex, limit, onPageChange, onLimitChange } = props

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: 'var(--color-gray-100)',
      })}
    >
      <Paginate pageCount={pageCount} forcePage={currentPageIndex} onPageChange={onPageChange} />

      <HStack spaceing={8}>
        <div
          className={css({
            display: 'inline-block',
            fontSize: 14,
            color: 'var(--color-gray-500)',
          })}
        >
          Rows per page:
        </div>

        <div className={css({ display: 'inline-block' })}>
          <select
            className={css({
              fontSize: 14,
              color: 'var(--color-gray-500)',
            })}
            value={limit}
            onChange={onLimitChange}
          >
            {[10, 20, 30, 50, 100].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </HStack>

      <div
        className={css({
          fontSize: 14,
          color: 'var(--color-gray-500)',
        })}
      >
        {currentPageIndex * limit + 1}-{Math.min((currentPageIndex + 1) * limit, totalCount)} of{' '}
        {totalCount}
      </div>
    </div>
  )
}
