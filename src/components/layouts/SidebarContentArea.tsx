import styles from './SidebarContentArea.module.css'

export function SidebarContentArea({ children }: { children: React.ReactNode }) {
  return <div className={styles.base}>{children}</div>
}
