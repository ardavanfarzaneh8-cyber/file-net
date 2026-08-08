import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import { notifications, type AppNotification } from '../data/mock'
import { BellIcon, ChatIcon, ListIcon, CheckIcon } from '../components/Icons'

const iconFor: Record<AppNotification['type'], { Icon: typeof BellIcon; path: string; color: string }> = {
  request: { Icon: BellIcon, path: '/requests', color: 'text-accent' },
  ad: { Icon: ListIcon, path: '/public-ads', color: 'text-accent' },
  message: { Icon: ChatIcon, path: '/messages', color: 'text-cyan' },
  system: { Icon: CheckIcon, path: '/profile', color: 'text-cyan' },
}

export default function Notifications() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <ScreenHeader title="اعلان‌ها" />

      <div className="px-6 space-y-2.5">
        {notifications.map((n, i) => {
          const meta = iconFor[n.type]
          return (
            <motion.button
              key={n.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(meta.path)}
              className={`w-full rounded-card p-3.5 flex items-start gap-3 text-right ${n.unread ? 'surface border-white/12' : 'bg-white/[0.02] border border-white/6'}`}
            >
              <div className={`w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${meta.color}`}>
                <meta.Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-bold text-white">{n.title}</p>
                  {n.unread && <span className="w-2 h-2 rounded-full bg-redx shrink-0" />}
                </div>
                <p className="text-[11.5px] text-white/55 leading-6 mt-0.5">{n.body}</p>
                <p className="text-[10px] text-white/30 mt-1">{n.time}</p>
              </div>
            </motion.button>
          )
        })}
      </div>

      <BottomNav />
    </PageTransition>
  )
}
