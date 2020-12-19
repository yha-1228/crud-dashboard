import styles from './Card.module.css';

export function Card({ children, variant }: { variant: 'primary' | 'warn'; children: React.ReactNode }) {
  return <div className={styles[variant]}>{children}</div>;
}
