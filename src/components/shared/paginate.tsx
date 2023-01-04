import { css } from '@emotion/css';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

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
  color: 'var(--color-gray-400)',
  borderRadius: 9999,
  outline: 'none',
  '&:hover': {
    backgroundColor: 'var(--color-gray-200)',
  },
});

const activePageLinkStyle = css({
  color: 'white',
  backgroundColor: 'var(--color-primary)',
  '&:hover': {
    backgroundColor: 'var(--color-primary-dark)',
  },
});

export function Paginate(props: PaginateProps) {
  const { pageCount, forcePage, onPageChange } = props;

  return (
    <ReactPaginate
      // logics
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={forcePage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      // labels
      previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
      nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
      // styles
      containerClassName={containerStyle}
      pageClassName={pageStyle}
      pageLinkClassName={pageLinkStyle}
      previousClassName={pageStyle}
      previousLinkClassName={pageLinkStyle}
      nextClassName={pageStyle}
      nextLinkClassName={pageLinkStyle}
      breakClassName={pageStyle}
      breakLinkClassName={pageLinkStyle}
      activeLinkClassName={activePageLinkStyle}
    />
  );
}
