import React from 'react';
import { css } from '@emotion/css';
import { Paginate } from '../shared/Paginate';
import { HStack } from '../shared/Stack';

type FooterProps = {
  isLoading: boolean;
  totalCount: number;
  pageCount: number;
  pageIndex: number;
  limit: number;
  onPageChange: (selectedPageIndex: number) => void;
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Footer(props: FooterProps) {
  const {
    isLoading,
    totalCount,
    pageCount,
    pageIndex,
    limit,
    onPageChange,
    onLimitChange,
  } = props;

  const handlePageChange = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected);
  };

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
      {!isLoading && (
        <>
          <Paginate
            pageCount={pageCount}
            forcePage={pageIndex}
            onPageChange={handlePageChange}
          />
          <HStack space={8}>
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
            {pageIndex * limit + 1}-
            {Math.min((pageIndex + 1) * limit, totalCount)} of {totalCount}
          </div>
        </>
      )}
    </div>
  );
}
