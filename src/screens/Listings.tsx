import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import PropertyRow from '../components/PropertyRow'
import Chip from '../components/Chip'
import { properties, homeFilters } from '../data/mock'
import { SearchIcon, FolderIcon, SlidersIcon } from '../components/Icons'

export default function Listings() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  const list = properties.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'special') return p.tag === 'special' || p.tag === 'hot'
    return p.deal === filter
  })

  return (
    <PageTransition>
      <ScreenHeader
        title="آگهی‌ها"
        right={
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate('/advanced-search')} className="w-11 h-11 rounded-full surface flex items-center justify-center text-white/80">
            <SearchIcon className="w-4 h-4" />
          </motion.button>
        }
      />

      <div className="px-6 flex gap-3">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/select-district')}
          className="flex-1 surface rounded-pill py-3 flex items-center justify-center gap-2 text-[13px] font-semibold text-white/85"
        >
          <FolderIcon className="w-4 h-4 text-accent" /> زونکن
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/advanced-search')}
          className="flex-1 surface rounded-pill py-3 flex items-center justify-center gap-2 text-[13px] font-semibold text-white/85"
        >
          <SlidersIcon className="w-4 h-4 text-cyan" /> فیلتر
        </motion.button>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto px-6 pb-1">
        {homeFilters.map((f) => (
          <Chip key={f.key} label={f.label} active={filter === f.key} onClick={() => setFilter(f.key)} />
        ))}
      </div>

      <div className="px-6 mt-3 space-y-3">
        {list.map((p, i) => (
          <PropertyRow key={p.id} property={p} index={i} />
        ))}
      </div>

      <BottomNav />
    </PageTransition>
  )
}
