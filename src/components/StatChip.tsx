import type { ReactNode } from 'react'

type Props = { icon: ReactNode; label: string }

export default function StatChip({ icon, label }: Props) {
  return (
    <div className="flex-1 surface rounded-field py-2.5 flex flex-col items-center gap-1">
      <span className="text-accent">{icon}</span>
      <span className="text-[11.5px] font-semibold text-white/85">{label}</span>
    </div>
  )
}
