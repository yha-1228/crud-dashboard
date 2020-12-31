import { ComponentPropsWithoutRef } from 'react'
import styles from './Headings.module.css'

type MainHeadingProps = ComponentPropsWithoutRef<'h1'> & { children: React.ReactNode }

export function MainHeading({ children, ...other }: MainHeadingProps) {
  return (
    <h1 className={styles.main} {...other}>
      {children}
    </h1>
  )
}

type SidebarHeadingProps = ComponentPropsWithoutRef<'h2'> & { children: React.ReactNode }

export function SidebarHeading({ children, ...other }: SidebarHeadingProps) {
  return (
    <h2 className={styles.sidebar} {...other}>
      {children}
    </h2>
  )
}
