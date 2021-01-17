import styles from './MainContentArea.module.css'

export function MainContentArea({ children }: { children: React.ReactNode }) {
  return <div className={styles.base}>{children}</div>
}
