import { motion } from 'framer-motion'

type Props = {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function Chip({ label, active = false, onClick }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`relative shrink-0 px-4 py-2 rounded-pill text-[12.5px] font-semibold transition-colors ${
        active ? 'text-[#1A1D00]' : 'text-white/60 chip'
      }`}
    >
      {active && (
        <motion.span
          layoutId="chip-active"
          className="absolute inset-0 rounded-pill accent-fill"
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  )
}
