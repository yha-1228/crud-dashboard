import classnames from 'classnames';
import './Table.css';

export function TableWrapper({ children }: { children: React.ReactNode }) {
  return <div className="TableWrapper">{children}</div>;
}

export function Table({ width, ...other }: JSX.IntrinsicElements['table'] & { width?: any }) {
  return <table className="Table" style={{ width: width }} {...other} />;
}

export function TableHead({ ...other }: JSX.IntrinsicElements['thead']) {
  return <thead className="TableHead" {...other} />;
}

export function TableBody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return <tbody className="TableBody" {...other} />;
}

export function TableHeader({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <th className={classnames('TableHeader', `text-${align}`)} {...other} />;
}

export function TableData({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <td className={classnames('TableData', `text-${align}`)} {...other} />;
}
