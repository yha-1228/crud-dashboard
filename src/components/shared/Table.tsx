import { Box } from '@material-ui/core'
import React from 'react'
import styles from './Table.module.css'

export function TableContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      overflow="hidden"
      bgcolor="white"
      border="1px solid var(--color-gray-200)"
      borderRadius="6px"
      boxShadow="0 5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2)"
    >
      {children}
    </Box>
  )
}

export function Table({ ...other }: JSX.IntrinsicElements['table']) {
  return <table className={styles.table} {...other} />
}

export function Thead({ ...other }: JSX.IntrinsicElements['thead']) {
  return <thead className={styles.tableHead} {...other} />
}

export function Tbody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return <tbody className={styles.tableBody} {...other} />
}

export function Th({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <th className={styles.tableHeader} style={{ textAlign: align }} {...other} />
}

export function Td({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <td className={styles.tableData} style={{ textAlign: align }} {...other} />
}
