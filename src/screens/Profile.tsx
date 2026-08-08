import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import BottomNav from '../components/BottomNav'
import { agent, IMAGES } from '../data/mock'
import { PhoneIcon, FolderIcon, UsersIcon, StarIcon, ChartIcon, BellIcon, TagIcon, ArrowIcon, CalcIcon } from '../components/Icons'

const menu = [
  { label: 'سایت شخصی من', Icon: TagIcon, path: '/agent-site' },
  { label: 'فایل‌های من', Icon: FolderIcon, path: '/filing' },
  { label: 'مشتریان و گروه‌ها', Icon: UsersIcon, path: '/customers' },
  { label: 'درخواست‌های ورودی', Icon: BellIcon, path: '/requests' },
  { label: 'ابزار محاسبه', Icon: CalcIcon, path: '/tools' },
  { label: 'اعلان‌ها', Icon: BellIcon, path: '/notifications' },
]

export default function Profile() {
  const navigate = useNavigate()
  const stats = [
    { label: 'فایل‌ها', value: agent.stats.files, Icon: FolderIcon },
    { label: 'مشتریان', value: agent.stats.customers, Icon: UsersIcon },
    { label: 'امتیاز', value: agent.stats.rating, Icon: StarIcon },
  ]

  return (
    <PageTransition>
      {/* banner */}
      <div className="relative h-40 overflow-hidden">
        <img src={IMAGES.cityNight} alt="cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#060608]" />
        <div className="absolute top-6 inset-x-0 text-center">
          <h1 className="text-gradient-accent font-extrabold tracking-[0.3em] text-lg">FILE-NET</h1>
        </div>
      </div>

      <div className="px-6 -mt-14 relative z-10">
        <div className="surface-solid rounded-card p-5 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-accent to-cyan/50 -mt-16 shadow-accent">
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-3xl font-bold text-accent">ع م</div>
          </div>
          <h2 className="text-[18px] font-extrabold text-white mt-3">{agent.name}</h2>
          <p className="flex items-center gap-1.5 text-[12.5px] text-accent mt-1" dir="ltr">
            <PhoneIcon className="w-3.5 h-3.5" /> {agent.phone}
          </p>
          <p className="text-[11px] text-white/45 mt-1.5">{agent.role}</p>
          <span className="mt-3 px-3 py-1 rounded-pill bg-cyan/12 text-cyan text-[11px] font-semibold">{agent.license}</span>

          {/* stats */}
          <div className="flex gap-2.5 mt-5 w-full">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 bg-black/25 border border-white/8 rounded-field py-3 flex flex-col items-center gap-1">
                <s.Icon className="w-4 h-4 text-accent" />
                <span className="text-[15px] font-extrabold text-white">{s.value}</span>
                <span className="text-[10px] text-white/45">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* activity chart mock */}
        <div className="surface rounded-card p-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-bold text-white">فعالیت این ماه</p>
            <ChartIcon className="w-4 h-4 text-cyan" />
          </div>
          <div className="flex items-end justify-between gap-2 h-20">
            {[40, 65, 45, 80, 55, 95, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                className={`flex-1 rounded-t-md ${i === 5 ? 'accent-fill' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        {/* menu */}
        <div className="mt-4 space-y-2.5">
          {menu.map((m, i) => (
            <motion.button
              key={m.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(m.path)}
              className="w-full surface rounded-card p-3.5 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-cyan">
                <m.Icon className="w-5 h-5" />
              </div>
              <span className="flex-1 text-right text-[13.5px] font-semibold text-white">{m.label}</span>
              <ArrowIcon className="w-4 h-4 text-white/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
