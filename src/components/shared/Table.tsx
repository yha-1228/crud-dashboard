import { Box } from '@material-ui/core'
import React from 'react'
import styles from './Table.module.css'

export function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      overflow="hidden"
      bgcolor="white"
      border="1px solid var(--color-gray-200)"
      borderRadius="6px"
    >
      {children}
    </Box>
  )
}

export function Table({ ...other }: JSX.IntrinsicElements['table']) {
  return <table className={styles.table} {...other} />
}

export function TableHead({ ...other }: JSX.IntrinsicElements['thead']) {
  return <thead className={styles.tableHead} {...other} />
}

export function TableBody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return <tbody className={styles.tableBody} {...other} />
}

export function TableHeader({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <th className={styles.tableHeader} style={{ textAlign: align }} {...other} />
}

export function TableData({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <td className={styles.tableData} style={{ textAlign: align }} {...other} />
}
