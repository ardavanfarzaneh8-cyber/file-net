import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import BottomNav from '../components/BottomNav'
import ProfileBar from '../components/ProfileBar'
import AdSlider from '../components/AdSlider'
import Chip from '../components/Chip'
import PropertyCard from '../components/PropertyCard'
import { properties, homeFilters } from '../data/mock'
import { SearchIcon, SlidersIcon } from '../components/Icons'

export default function Home() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<string>('all')

  const list = properties.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'special') return p.tag === 'special' || p.tag === 'hot'
    return p.deal === filter
  })

  return (
    <PageTransition>
      <ProfileBar greeting="بریم فایل بعدی رو پیدا کنیم" />

      <div className="px-6 mt-6">
        <h1 className="text-[27px] leading-[1.3] text-white font-light">
          بهترین فایل‌های ملکی
          <br />
          در <span className="font-extrabold">سراسر ایران</span>
        </h1>
      </div>

      {/* search */}
      <div className="px-6 mt-5 flex items-center gap-3">
        <button
          onClick={() => navigate('/advanced-search')}
          className="flex-1 surface rounded-pill flex items-center gap-3 px-4 py-3.5 text-right"
        >
          <SearchIcon className="w-4 h-4 text-white/45" />
          <span className="text-[13px] text-white/40">جستجوی ملک، کد فایل یا آدرس...</span>
        </button>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => navigate('/advanced-search')}
          className="w-12 h-12 rounded-full accent-fill flex items-center justify-center shrink-0"
        >
          <SlidersIcon className="w-5 h-5 text-[#1A1D00]" />
        </motion.button>
      </div>

      {/* ads slider (placeholder — campaigns come here) */}
      <div className="px-6 mt-5">
        <AdSlider />
      </div>

      {/* filter chips */}
      <div className="mt-5 flex gap-2 overflow-x-auto px-6 pb-1">
        {homeFilters.map((f) => (
          <Chip key={f.key} label={f.label} active={filter === f.key} onClick={() => setFilter(f.key)} />
        ))}
      </div>

      {/* cards */}
      <div className="px-6 mt-4 space-y-4">
        {list.map((p, i) => (
          <PropertyCard key={p.id} property={p} index={i} />
        ))}
      </div>

      <BottomNav />
    </PageTransition>
  )
}
