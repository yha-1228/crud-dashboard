import './FiledBlock.css'

export function FiledBlock({ label, input }: { label: React.ReactNode; input: React.ReactNode }) {
  return (
    <div>
      <div className="FiledBlock__label-wrapper">{label}</div>
      <div>{input}</div>
    </div>
  )
}
