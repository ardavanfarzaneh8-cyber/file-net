import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import { conversations } from '../data/mock'
import { SearchIcon } from '../components/Icons'

export default function Messages() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <ScreenHeader
        title="پیام‌ها"
        showBack={false}
        right={
          <button className="w-11 h-11 rounded-full surface flex items-center justify-center text-white/80">
            <SearchIcon className="w-4 h-4" />
          </button>
        }
      />

      <div className="px-6 space-y-2.5">
        {conversations.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/chat')}
            className="w-full surface rounded-card p-3.5 flex items-center gap-3"
          >
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-[13px] font-bold">{c.initials}</div>
              {c.online && <span className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 rounded-full bg-cyan border-2 border-[#0D0D10]" />}
            </div>
            <div className="flex-1 min-w-0 text-right">
              <div className="flex items-center justify-between">
                <p className="text-[13.5px] font-bold text-white">{c.name}</p>
                <span className="text-[10.5px] text-white/35">{c.time}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className={`text-[12px] truncate ${c.unread ? 'text-white/75' : 'text-white/40'}`}>{c.last}</p>
                {c.unread > 0 && (
                  <span className="shrink-0 w-5 h-5 rounded-full accent-fill text-[10px] font-bold flex items-center justify-center mr-2">{c.unread}</span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <BottomNav />
    </PageTransition>
  )
}
