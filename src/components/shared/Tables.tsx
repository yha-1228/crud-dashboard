import classnames from 'classnames'
import './Tables.css'

export function TableWrapper({ children }: { children: React.ReactNode }) {
  return <div className="TableWrapper">{children}</div>
}

export function Table({ ...other }: JSX.IntrinsicElements['table']) {
  return <table className="Table" {...other} />
}

export function TableHead({ ...other }: JSX.IntrinsicElements['thead']) {
  return <thead className="TableHead" {...other} />
}

export function TableBody({ ...other }: JSX.IntrinsicElements['tbody']) {
  return <tbody className="TableBody" {...other} />
}

export function TableHeader({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <th className={classnames('TableHeader', align && `text-${align}`)} {...other} />
}

export function TableData({
  align,
  ...other
}: JSX.IntrinsicElements['th'] & { align?: 'left' | 'center' | 'right' }) {
  return <td className={classnames('TableData', align && `text-${align}`)} {...other} />
}
