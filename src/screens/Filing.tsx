import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import ConfirmDialog from '../components/ConfirmDialog'
import { fileItems } from '../data/mock'
import { PlusIcon, SlidersIcon, FolderIcon, PhoneIcon, SendIcon, ChatIcon } from '../components/Icons'

const statusMeta: Record<string, { label: string; cls: string }> = {
  available: { label: 'موجود', cls: 'bg-cyan/15 text-cyan' },
  reserved: { label: 'رزرو', cls: 'bg-accent/15 text-accent' },
  sold: { label: 'فروخته شد', cls: 'bg-redx/15 text-redx' },
}
const statuses = ['available', 'reserved', 'available', 'sold']

export default function Filing() {
  const navigate = useNavigate()
  const [sendId, setSendId] = useState<string | null>(null)

  return (
    <PageTransition>
      <ScreenHeader
        title="فایلینگ"
        right={
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate('/advanced-search')} className="w-11 h-11 rounded-full surface flex items-center justify-center text-cyan">
            <SlidersIcon className="w-4 h-4" />
          </motion.button>
        }
      />

      <div className="px-6">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/new-file')}
          className="w-full accent-fill rounded-pill py-3.5 flex items-center justify-center gap-2 text-[13.5px] font-bold"
        >
          <PlusIcon className="w-5 h-5 text-[#1A1D00]" /> اضافه کردن فایل جدید
        </motion.button>

        <div className="flex gap-3 mt-3">
          <button className="flex-1 surface rounded-pill py-2.5 flex items-center justify-center gap-2 text-[12px] text-white/70">
            <FolderIcon className="w-3.5 h-3.5 text-accent" /> زونکن
          </button>
          <button onClick={() => navigate('/advanced-search')} className="flex-1 surface rounded-pill py-2.5 flex items-center justify-center gap-2 text-[12px] text-white/70">
            <SlidersIcon className="w-3.5 h-3.5 text-cyan" /> فیلتر
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {fileItems.map((f, i) => {
            const st = statusMeta[statuses[i] || 'available']
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="surface rounded-card p-3.5"
              >
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] text-cyan font-bold bg-cyan/10 px-2 py-0.5 rounded-pill">{f.code}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-pill ${st.cls}`}>{st.label}</span>
                    </div>
                    <h3 className="text-[13.5px] font-bold text-white mt-1.5">{f.title}</h3>
                    <p className="text-[11px] text-white/45 mt-0.5">{f.address}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2.5 text-[11.5px] text-white/50">
                  <span>مالک: {f.owner}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-accent font-bold">{f.price}</span>
                    <span className="flex items-center gap-1 text-white/50" dir="ltr"><PhoneIcon className="w-3.5 h-3.5" /> {f.phone}</span>
                  </span>
                </div>

                <div className="flex gap-2.5 mt-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSendId(f.id)}
                    className="flex-1 py-2.5 rounded-pill surface text-[12px] font-semibold text-white flex items-center justify-center gap-2"
                  >
                    <SendIcon className="w-3.5 h-3.5 text-cyan -scale-x-100" /> ارسال آگهی
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/messages')}
                    className="flex-1 py-2.5 rounded-pill bg-cyan/12 border border-cyan/30 text-cyan text-[12px] font-semibold flex items-center justify-center gap-2"
                  >
                    <ChatIcon className="w-3.5 h-3.5" /> ارسال به مشتری
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <ConfirmDialog
        open={sendId !== null}
        title="ارسال آگهی"
        message="این فایل برای انتشار در سایت و کانال‌های شما ارسال شود؟"
        confirmLabel="ارسال کن"
        icon={<SendIcon className="w-6 h-6 -scale-x-100" />}
        onCancel={() => setSendId(null)}
        onConfirm={() => setSendId(null)}
      />

      <BottomNav />
    </PageTransition>
  )
}
