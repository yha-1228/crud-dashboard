import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Paginate.module.css'

type Props = {
  pageCount: number
  onPageChange: (selectedItem: { selected: number }) => void
}

export function Paginate(props: Props) {
  const { pageCount, onPageChange } = props

  return (
    <ReactPaginate
      // logics
      pageCount={pageCount}
      onPageChange={onPageChange}
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
