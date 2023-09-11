import { ClassNames, css } from '@emotion/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { getTheme } from '../../styles/utils';
import type { ReactPaginateProps } from 'react-paginate';

type PaginateProps = Pick<
  ReactPaginateProps,
  'pageCount' | 'forcePage' | 'onPageChange'
>;

const containerStyle = css({
  padding: 0,
});

const pageStyle = css({
  display: 'inline-block',
  paddingRight: 6,
  textAlign: 'center',
  cursor: 'pointer',
});

const pageLinkStyle = css({
  display: 'block',
  width: 32,
  fontWeight: 'bold',
  lineHeight: '32px',
  color: getTheme('--color-gray-400'),
  borderRadius: 9999,
  outline: 'none',
  '&:hover': {
    backgroundColor: getTheme('--color-gray-200'),
  },
});

const activePageLinkStyle = css({
  color: 'white',
  backgroundColor: getTheme('--color-primary'),
  '&:hover': {
    backgroundColor: getTheme('--color-primary-dark'),
  },
});

export function Paginate(props: PaginateProps) {
  const { pageCount, forcePage, onPageChange } = props;

  return (
    <ClassNames>
      {({ css }) => (
        <ReactPaginate
          // logics
          pageCount={pageCount}
          onPageChange={onPageChange}
          forcePage={forcePage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          // labels
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          // styles
          containerClassName={css(containerStyle)}
          pageClassName={css(pageStyle)}
          pageLinkClassName={css(pageLinkStyle)}
          previousClassName={css(pageStyle)}
          previousLinkClassName={css(pageLinkStyle)}
          nextClassName={css(pageStyle)}
          nextLinkClassName={css(pageLinkStyle)}
          breakClassName={css(pageStyle)}
          breakLinkClassName={css(pageLinkStyle)}
          activeLinkClassName={css(activePageLinkStyle)}
        />
      )}
    </ClassNames>
  );
}
