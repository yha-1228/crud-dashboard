import './Sidebar.css';

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return <aside className="Sidebar">{children}</aside>;
}
