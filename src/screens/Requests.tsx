import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import { requests } from '../data/mock'
import { ChatIcon, CheckIcon, MapPinIcon } from '../components/Icons'

export default function Requests() {
  const navigate = useNavigate()
  const unread = requests.filter((r) => r.unread).length

  return (
    <PageTransition>
      <ScreenHeader title="درخواست‌ها" />

      <div className="px-6">
        <div className="surface rounded-card p-4 flex items-center justify-between">
          <div>
            <p className="text-[13px] font-bold text-white">لیدهای ورودی</p>
            <p className="text-[11px] text-white/45 mt-0.5">درخواست‌های تازهٔ مشتری‌ها را اینجا پاسخ بده</p>
          </div>
          <span className="w-11 h-11 rounded-full accent-fill flex items-center justify-center text-[14px] font-extrabold">
            {unread}
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {requests.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="surface rounded-card p-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-[13px] font-bold shrink-0">
                  {r.initials}
                  {r.unread && <span className="absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full bg-redx ring-2 ring-[#0D0D10]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-[13.5px] font-bold text-white">{r.name}</p>
                    <span className="text-[10.5px] text-white/35">{r.time}</span>
                  </div>
                  <p className="text-[12px] text-white/60 mt-0.5 truncate">{r.need}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3 text-[11px] text-white/45">
                <span className="px-2.5 py-1 rounded-pill bg-white/5 border border-white/8 text-accent font-semibold">{r.budget}</span>
                <span className="flex items-center gap-1"><MapPinIcon className="w-3.5 h-3.5" />{r.district}</span>
              </div>

              <div className="flex gap-2.5 mt-3.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate('/chat')}
                  className="flex-1 py-2.5 rounded-pill accent-fill text-[12.5px] font-bold flex items-center justify-center gap-1.5"
                >
                  <ChatIcon className="w-4 h-4 text-[#1A1D00]" /> پاسخ و چت
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  className="w-11 rounded-pill surface flex items-center justify-center text-cyan"
                >
                  <CheckIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
