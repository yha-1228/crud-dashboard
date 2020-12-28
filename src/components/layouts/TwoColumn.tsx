export function TwoColumn({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {left}
      {right}
    </div>
  )
}
