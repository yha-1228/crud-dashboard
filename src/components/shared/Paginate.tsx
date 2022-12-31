import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import styles from './Paginate.module.css'

type PaginateProps = Pick<ReactPaginateProps, 'pageCount' | 'forcePage' | 'onPageChange'>

export function Paginate(props: PaginateProps) {
  const { pageCount, forcePage, onPageChange } = props

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
      containerClassName={styles.container}
      pageClassName={styles.page}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.page}
      previousLinkClassName={styles.pageLink}
      nextClassName={styles.page}
      nextLinkClassName={styles.pageLink}
      breakClassName={styles.page}
      breakLinkClassName={styles.pageLink}
      activeLinkClassName={styles.pageLink_active}
    />
  )
}
