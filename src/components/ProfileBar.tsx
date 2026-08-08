import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BellIcon } from './Icons'
import { agent } from '../data/mock'

type Props = { greeting?: string }

export default function ProfileBar({ greeting = 'خوش آمدید' }: Props) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-6 pt-6">
      <button onClick={() => navigate('/profile')} className="flex items-center gap-3">
        <div className="relative">
          <div className="w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-br from-accent/70 to-cyan/40">
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-[13px] font-bold text-accent">
              ع م
            </div>
          </div>
          <span className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-cyan border-2 border-[#0A0A0C]" />
        </div>
        <div className="text-right">
          <p className="text-[15px] font-bold text-white leading-tight">سلام، {agent.name.split(' ')[0]} 👋</p>
          <p className="text-[11px] text-white/45 leading-tight mt-0.5">{greeting}</p>
        </div>
      </button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/notifications')}
        className="relative w-11 h-11 rounded-full surface flex items-center justify-center text-white/80"
      >
        <BellIcon className="w-5 h-5" />
        <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-redx ring-2 ring-[#0A0A0C]" />
      </motion.button>
    </div>
  )
}
