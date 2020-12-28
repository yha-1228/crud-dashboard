import './Headers.css'

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <div className="SidebarHeader">{children}</div>
}

export function MainHeader({ children }: { children: React.ReactNode }) {
  return <div className="MainHeader">{children}</div>
}
