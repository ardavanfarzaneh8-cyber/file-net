import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import PropertyRow from '../components/PropertyRow'
import AccentButton from '../components/AccentButton'
import { properties } from '../data/mock'
import { SearchIcon } from '../components/Icons'

const fields = [
  { key: 'price', label: 'قیمت (تومان)', placeholder: 'از ... تا ...', wide: true },
  { key: 'address', label: 'آدرس', placeholder: 'منطقه یا خیابان', wide: true },
  { key: 'beds', label: 'تعداد خواب', placeholder: 'مثال: ۲' },
  { key: 'area', label: 'متراژ', placeholder: 'مثال: ۱۰۰ متر' },
]

const deals = ['همه', 'فروش', 'رهن و اجاره']

export default function AdvancedSearch() {
  const [showResults, setShowResults] = useState(false)
  const [deal, setDeal] = useState('همه')

  return (
    <PageTransition>
      <ScreenHeader title="جستجوی پیشرفته" />

      <div className="px-6">
        <div className="surface rounded-pill flex items-center gap-3 px-4 py-3.5">
          <SearchIcon className="w-4 h-4 text-white/45" />
          <input
            placeholder="جستجو در عنوان، کد فایل یا آدرس..."
            className="bg-transparent outline-none text-[13px] flex-1 text-white"
          />
        </div>

        <div className="surface-solid rounded-card p-5 mt-4">
          <h2 className="text-[14px] font-bold text-white mb-4">فیلترهای جستجو</h2>

          <div className="flex gap-2 mb-4">
            {deals.map((d) => (
              <button
                key={d}
                onClick={() => setDeal(d)}
                className={`flex-1 py-2.5 rounded-field text-[12px] font-semibold transition-colors ${
                  deal === d ? 'accent-fill' : 'surface text-white/60'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {fields.map((f) => (
              <div key={f.key} className={f.wide ? 'col-span-2' : ''}>
                <label className="text-[11px] text-white/50 mb-1.5 block">{f.label}</label>
                <input
                  placeholder={f.placeholder}
                  className="w-full bg-black/30 border border-white/10 rounded-field px-3 py-2.5 text-[12px] outline-none focus:border-accent/60 transition-colors text-white"
                />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <AccentButton onClick={() => setShowResults(true)} icon={<SearchIcon className="w-4 h-4 text-[#1A1D00]" />}>
              جستجو
            </AccentButton>
          </div>
        </div>

        {showResults && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 space-y-3">
            <p className="text-[12px] text-white/50">{properties.length} نتیجه یافت شد</p>
            {properties.map((p, i) => (
              <PropertyRow key={p.id} property={p} index={i} />
            ))}
          </motion.div>
        )}
      </div>

      <BottomNav />
    </PageTransition>
  )
}
