import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HomeIcon, ListIcon, BriefcaseIcon, BellIcon, ProfileIcon } from './Icons'

const items = [
  { path: '/home', label: 'خانه', Icon: HomeIcon },
  { path: '/public-ads', label: 'نیازمندی‌ها', Icon: ListIcon },
  { path: '/agent-site', label: 'دفتر کار', Icon: BriefcaseIcon, isAction: true },
  { path: '/requests', label: 'درخواست‌ها', Icon: BellIcon },
  { path: '/profile', label: 'پروفایل', Icon: ProfileIcon },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 pb-5 z-40 pointer-events-none">
      <div className="glass-nav pointer-events-auto rounded-pill px-3 py-2 flex items-center justify-between">
        {items.map(({ path, label, Icon, isAction }) => {
          const active = location.pathname === path || (path !== '/home' && location.pathname.startsWith(path))
          if (isAction) {
            return (
              <motion.button
                key={path}
                onClick={() => navigate(path)}
                whileTap={{ scale: 0.88 }}
                whileHover={{ y: -2 }}
                className="relative -mt-7 w-14 h-14 rounded-full flex flex-col items-center justify-center accent-fill"
              >
                <Icon className="w-6 h-6 text-[#1A1D00]" />
                <span className="absolute inset-0 rounded-full accent-glow" />
              </motion.button>
            )
          }
          return (
            <motion.button
              key={path}
              onClick={() => navigate(path)}
              whileTap={{ scale: 0.9 }}
              className="relative flex flex-col items-center gap-1 py-1.5 px-3 rounded-2xl"
            >
              {active && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-2xl bg-white/[0.06] border border-white/10"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <Icon className={`relative z-10 w-[22px] h-[22px] transition-colors ${active ? 'text-accent' : 'text-white/45'}`} />
              <span className={`relative z-10 text-[9.5px] transition-colors ${active ? 'text-accent font-semibold' : 'text-white/40'}`}>
                {label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
