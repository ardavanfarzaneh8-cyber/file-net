import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  onClick?: () => void
  variant?: 'accent' | 'dark' | 'cyan'
  className?: string
  icon?: ReactNode
}

export default function AccentButton({ children, onClick, variant = 'accent', className = '', icon }: Props) {
  const base = 'w-full py-3.5 rounded-pill font-bold text-[14px] flex items-center justify-center gap-2 transition-colors'
  const styles =
    variant === 'accent'
      ? 'accent-fill'
      : variant === 'cyan'
        ? 'bg-cyan/15 border border-cyan/40 text-cyan cyan-glow'
        : 'surface text-white'
  return (
    <motion.button whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.01 }} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {icon}
      {children}
    </motion.button>
  )
}
