import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BackIcon } from './Icons'

type Props = {
  title: string
  right?: ReactNode
  showBack?: boolean
  onBack?: () => void
}

export default function ScreenHeader({ title, right, showBack = true, onBack }: Props) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-6 pt-6 pb-3">
      <div className="w-11">
        {showBack && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => (onBack ? onBack() : navigate(-1))}
            className="w-11 h-11 rounded-full surface flex items-center justify-center text-white/80"
          >
            <BackIcon className="w-4 h-4 rotate-180" />
          </motion.button>
        )}
      </div>
      <h1 className="text-[16px] font-bold text-white">{title}</h1>
      <div className="w-11 flex justify-end">{right}</div>
    </div>
  )
}
