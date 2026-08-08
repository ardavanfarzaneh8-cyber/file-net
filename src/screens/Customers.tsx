import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import AccentButton from '../components/AccentButton'
import { customerGroups } from '../data/mock'
import { PlusIcon, TrashIcon, UsersIcon, ArrowIcon, SendIcon } from '../components/Icons'

export default function Customers() {
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <PageTransition>
      <ScreenHeader title="مشتریان" />

      <div className="px-6">
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex-1 accent-fill rounded-pill py-3 flex items-center justify-center gap-2 text-[12.5px] font-bold"
          >
            <PlusIcon className="w-4 h-4 text-[#1A1D00]" /> ساخت گروه جدید
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setEditMode((v) => !v)}
            className={`px-4 rounded-pill flex items-center justify-center gap-2 text-[12.5px] font-semibold transition-colors ${
              editMode ? 'bg-redx/15 border border-redx/40 text-redx' : 'surface text-white/70'
            }`}
          >
            <TrashIcon className="w-4 h-4" /> ویرایش
          </motion.button>
        </div>

        <div className="mt-5 space-y-2.5">
          {customerGroups.map((g, i) => {
            const active = selected.has(g.id)
            return (
              <motion.button
                key={g.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (editMode ? toggle(g.id) : navigate('/send-message'))}
                className={`w-full surface rounded-card p-3.5 flex items-center gap-3 transition-colors ${active ? 'border-redx/50' : ''}`}
              >
                <div className="w-11 h-11 rounded-2xl bg-cyan/12 flex items-center justify-center text-cyan shrink-0">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-[13.5px] font-bold text-white">{g.name}</p>
                  <p className="text-[11px] text-white/45 mt-0.5">{g.count} مخاطب</p>
                </div>
                {editMode ? (
                  <span className={`w-5 h-5 rounded-full border-2 ${active ? 'bg-redx border-redx' : 'border-white/25'}`} />
                ) : (
                  <>
                    <span className="px-2.5 py-1 rounded-pill bg-accent/12 text-accent text-[12px] font-bold">{g.count}</span>
                    <ArrowIcon className="w-4 h-4 text-white/30" />
                  </>
                )}
              </motion.button>
            )
          })}
        </div>

        <div className="mt-6">
          <AccentButton onClick={() => navigate('/send-message')} icon={<SendIcon className="w-4 h-4 text-[#1A1D00] -scale-x-100" />}>
            ارسال پیام گروهی
          </AccentButton>
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
