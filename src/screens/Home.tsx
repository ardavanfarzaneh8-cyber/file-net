import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import BottomNav from '../components/BottomNav'
import ProfileBar from '../components/ProfileBar'
import { buildingServices } from '../data/mock'
import {
  SearchIcon, SlidersIcon, UsersIcon, FolderIcon, ListIcon,
  BriefcaseIcon, BellIcon, GraduationIcon, BuildingIcon, PhoneIcon, ArrowIcon,
} from '../components/Icons'

const cards = [
  { label: 'لیست مشتریان', Icon: UsersIcon, path: '/customers' },
  { label: 'فایلینگ', Icon: FolderIcon, path: '/filing' },
  { label: 'آگهی‌ها', Icon: ListIcon, path: '/public-ads' },
  { label: 'صفحه کاری', Icon: BriefcaseIcon, path: '/agent-site' },
  { label: 'درخواست‌ها', Icon: BellIcon, path: '/requests' },
  { label: 'محصولات آموزشی', Icon: GraduationIcon, path: '/tools' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <ProfileBar greeting="به دفتر کار خوش آمدی" />

      <div className="px-6 mt-6">
        <h1 className="text-[27px] leading-[1.3] text-white font-light">
          سامانهٔ هوشمند
          <br />
          <span className="font-extrabold">مشاوران املاک</span> ایران
        </h1>
      </div>

      {/* search */}
      <div className="px-6 mt-5 flex items-center gap-3">
        <button
          onClick={() => navigate('/public-ads')}
          className="flex-1 surface rounded-pill flex items-center gap-3 px-4 py-3.5 text-right"
        >
          <SearchIcon className="w-4 h-4 text-white/45" />
          <span className="text-[13px] text-white/40">جستجوی آگهی، مشتری یا خدمات...</span>
        </button>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => navigate('/public-ads')}
          className="w-12 h-12 rounded-full accent-fill flex items-center justify-center shrink-0"
        >
          <SlidersIcon className="w-5 h-5 text-[#1A1D00]" />
        </motion.button>
      </div>

      {/* dashboard cards grid (2×3) */}
      <div className="px-6 mt-7">
        <h2 className="text-[14px] font-bold text-white mb-3">دفتر کارِ مشاوران املاک</h2>
        <div className="grid grid-cols-3 gap-3">
          {cards.map(({ label, Icon, path }, i) => (
            <motion.button
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(path)}
              className="surface rounded-card py-4 flex flex-col items-center gap-2"
            >
              <span className="w-11 h-11 rounded-2xl bg-accent/12 flex items-center justify-center text-accent">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-[11px] text-white/75 font-medium text-center leading-tight px-1">{label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* building-services ads (replaces house photos) */}
      <div className="px-6 mt-7">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[14px] font-bold text-white">آگهی‌های خدمات ساختمانی</h2>
          <span className="text-[11px] text-cyan font-medium">نمایش همه ›</span>
        </div>
        <div className="space-y-2.5">
          {buildingServices.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="surface rounded-card p-3.5 flex items-center gap-3"
            >
              <span className="w-12 h-12 rounded-2xl bg-cyan/12 flex items-center justify-center text-cyan shrink-0">
                <BuildingIcon className="w-6 h-6" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[13px] font-bold text-white truncate">{s.title}</h3>
                  {s.tag && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-pill shrink-0 ${s.tag === 'فوری' ? 'bg-redx/15 text-redx' : 'bg-accent/15 text-accent'}`}>
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/45 mt-0.5">{s.provider} · {s.category}</p>
              </div>
              <a href={`tel:${s.phone}`} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                <PhoneIcon className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/public-ads')}
          className="w-full mt-4 surface rounded-pill py-3 flex items-center justify-center gap-2 text-[12.5px] font-semibold text-white/80"
        >
          مشاهدهٔ آگهی‌های دیوار و شیپور <ArrowIcon className="w-4 h-4 text-cyan" />
        </motion.button>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
