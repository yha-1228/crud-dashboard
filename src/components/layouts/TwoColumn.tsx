export function TwoColumn({ sidebar, main }: { sidebar: React.ReactNode; main: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {sidebar}
      {main}
    </div>
  )
}
