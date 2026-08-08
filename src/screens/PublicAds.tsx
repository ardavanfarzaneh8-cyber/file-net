import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import ConfirmDialog from '../components/ConfirmDialog'
import Chip from '../components/Chip'
import { publicAds, sourceMeta, type AdSource } from '../data/mock'
import { SearchIcon, MapPinIcon, AreaIcon, BedIcon, PlusIcon, CheckIcon, FolderIcon } from '../components/Icons'

const filters = [
  { key: 'all', label: 'همه منابع' },
  { key: 'divar', label: 'دیوار' },
  { key: 'sheypoor', label: 'شیپور' },
]

export default function PublicAds() {
  const [filter, setFilter] = useState('all')
  const [added, setAdded] = useState<Set<string>>(new Set())
  const [confirmId, setConfirmId] = useState<string | null>(null)

  const list = publicAds.filter((a) => filter === 'all' || a.source === filter)

  return (
    <PageTransition>
      <ScreenHeader
        title="آگهی‌های عمومی"
        right={
          <button className="w-11 h-11 rounded-full surface flex items-center justify-center text-white/80">
            <SearchIcon className="w-4 h-4" />
          </button>
        }
      />

      <div className="px-6">
        <div className="surface rounded-card p-4 flex items-center gap-3">
          <div className="flex -space-x-2 rtl:space-x-reverse">
            {(['divar', 'sheypoor'] as AdSource[]).map((s) => (
              <span key={s} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-[#0D0D10]" style={{ background: sourceMeta[s].color }}>
                {sourceMeta[s].label[0]}
              </span>
            ))}
          </div>
          <p className="text-[12px] text-white/60 leading-6 flex-1">
            آگهی‌های <span className="text-white font-semibold">دیوار</span> و <span className="text-white font-semibold">شیپور</span> به‌صورت خودکار این‌جا جمع می‌شن
          </p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <Chip key={f.key} label={f.label} active={filter === f.key} onClick={() => setFilter(f.key)} />
          ))}
        </div>

        <div className="mt-3 space-y-3">
          {list.map((ad, i) => {
            const meta = sourceMeta[ad.source]
            const isAdded = added.has(ad.id)
            return (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="surface rounded-card p-2.5 flex gap-3"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
                  <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-pill text-[9px] font-bold text-white" style={{ background: meta.color }}>
                    {meta.label}
                  </span>
                </div>

                <div className="flex-1 min-w-0 flex flex-col">
                  <h3 className="text-[13px] font-bold text-white truncate">{ad.title}</h3>
                  <div className="flex items-center gap-1 mt-1 text-white/45 text-[11px]">
                    <MapPinIcon className="w-3.5 h-3.5" /> <span className="truncate">{ad.address}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-white/50 text-[10.5px]">
                    <span className="flex items-center gap-1"><AreaIcon className="w-3.5 h-3.5 text-cyan" />{ad.area}م</span>
                    {ad.rooms > 0 && <span className="flex items-center gap-1"><BedIcon className="w-3.5 h-3.5 text-cyan" />{ad.rooms}</span>}
                    <span className="text-white/30">· {ad.time}</span>
                  </div>
                  <div className="mt-auto pt-1.5 flex items-center justify-between">
                    <span className="text-[12.5px] font-extrabold text-accent">{ad.price}</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => !isAdded && setConfirmId(ad.id)}
                      className={`px-3 py-1.5 rounded-pill text-[10.5px] font-bold flex items-center gap-1 ${isAdded ? 'bg-cyan/15 text-cyan' : 'accent-fill'}`}
                    >
                      {isAdded ? <><CheckIcon className="w-3.5 h-3.5" /> اضافه شد</> : <><PlusIcon className="w-3.5 h-3.5 text-[#1A1D00]" /> افزودن به فایل‌ها</>}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <ConfirmDialog
        open={confirmId !== null}
        title="افزودن به فایل‌های من"
        message="این آگهی به فایلینگ شما اضافه شود تا بتوانید مدیریت و پیگیری‌اش کنید؟"
        confirmLabel="بله، اضافه کن"
        icon={<FolderIcon className="w-6 h-6" />}
        onCancel={() => setConfirmId(null)}
        onConfirm={() => {
          if (confirmId) setAdded((s) => new Set(s).add(confirmId))
          setConfirmId(null)
        }}
      />

      <BottomNav />
    </PageTransition>
  )
}
