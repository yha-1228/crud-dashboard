import classnames from 'classnames';
import styles from './Tables.module.css';

export function TableWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.TableWrapper}>{children}</div>;
}

export function Table({ ...other }: JSX.IntrinsicElements['table']) {
  return <table className={styles.Table} {...other} />;
}

export function TableHead({ ...other }: JSX.IntrinsicElements['thead']) {
  return <thead className={styles.TableHead} {...other} />;
}

export function TableBody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return <tbody className={styles.TableBody} {...other} />;
}

export function TableHeader({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <th className={classnames(styles['TableHeader'], align && `text-${align}`)} {...other} />;
}

export function TableData({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <td className={classnames(styles['TableData'], align && `text-${align}`)} {...other} />;
}
