import React from 'react';
import { css } from '@emotion/react';
import { getTheme } from '../../styles/utils';
import { Paginate } from '../shared/paginate';
import { HStack } from '../shared/stack';

type FooterProps = {
  isLoading: boolean;
  totalCount: number;
  pageCount: number;
  pageIndex: number;
  limit: number;
  onPageChange: (selectedPageIndex: number) => void;
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const LIMITS = [10, 20, 30, 50, 100];

export function Footer(props: FooterProps) {
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
      css={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: getTheme('color', 'gray-100'),
      })}
    >
      {!isLoading && (
        <>
          <Paginate
            pageCount={pageCount}
            forcePage={pageIndex}
            onPageChange={handlePageChange}
          />

          <HStack
            space={24}
            css={css({
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              color: getTheme('color', 'gray-500'),
            })}
          >
            <HStack space={8}>
              <span
                css={css({
                  display: 'inline-block',
                })}
              >
                Rows per page:
              </span>

              <select value={limit} onChange={onLimitChange}>
                {LIMITS.map((limit) => (
                  <option key={limit} value={limit}>
                    {limit}
                  </option>
                ))}
              </select>
            </HStack>

            <div>
              {pageIndex * limit + 1}-
              {Math.min((pageIndex + 1) * limit, totalCount)} of {totalCount}
            </div>
          </HStack>
        </>
      )}
    </div>
  );
}
