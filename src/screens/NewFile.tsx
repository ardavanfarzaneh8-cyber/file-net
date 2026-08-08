import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import { ChevronDown, CheckIcon } from '../components/Icons'

type Step = { id: number; title: string; desc: string }

const steps: Step[] = [
  { id: 1, title: 'نوع ملک', desc: 'آپارتمان، ویلا، زمین، مغازه یا اداری' },
  { id: 2, title: 'اطلاعات مالک', desc: 'نام، شماره تماس و نشانی مالک' },
  { id: 3, title: 'اطلاعات ساختمان', desc: 'متراژ، تعداد اتاق، سال ساخت و طبقه' },
  { id: 4, title: 'امکانات', desc: 'پارکینگ، انباری، آسانسور و امکانات رفاهی' },
  { id: 5, title: 'قیمت', desc: 'قیمت فروش یا اجاره و مبلغ رهن' },
  { id: 6, title: 'توضیحات', desc: 'توضیح تکمیلی دربارهٔ ملک' },
  { id: 7, title: 'آدرس', desc: 'منطقه، خیابان و موقعیت روی نقشه' },
  { id: 8, title: 'نمونه آگهی', desc: 'پیش‌نمایش نهایی آگهی قبل از ثبت' },
]

const propertyTypes = ['آپارتمان', 'ویلا', 'زمین', 'مغازه', 'اداری', 'کلنگی']
const facilities = ['پارکینگ', 'انباری', 'آسانسور', 'استخر', 'سونا', 'جکوزی', 'کابینت', 'تراس', 'لابی', 'نگهبانی', 'دوربین', 'گرمایش']

const field = 'w-full bg-black/30 border border-white/10 rounded-field px-3 py-2.5 text-[12px] outline-none focus:border-accent/60 transition-colors text-white'

function StepBody({ id }: { id: number }) {
  const [type, setType] = useState('آپارتمان')
  const [picked, setPicked] = useState<Set<string>>(new Set(['پارکینگ', 'آسانسور']))

  if (id === 1) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {propertyTypes.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`py-2.5 rounded-field text-[12px] font-semibold transition-colors ${type === t ? 'accent-fill' : 'surface text-white/60'}`}
          >
            {t}
          </button>
        ))}
      </div>
    )
  }
  if (id === 2) {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        <input placeholder="نام مالک" className={field} />
        <input dir="ltr" placeholder="تلفن مالک" className={field} />
        <input placeholder="نام مستاجر" className={field} />
        <input dir="ltr" placeholder="تلفن مستاجر" className={field} />
      </div>
    )
  }
  if (id === 3) {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        <input placeholder="زیربنا (متر)" className={field} />
        <input placeholder="سال ساخت" className={field} />
        <input placeholder="تعداد خواب" className={field} />
        <input placeholder="طبقه" className={field} />
        <input placeholder="جهت" className={field} />
        <input placeholder="نوع سند" className={field} />
      </div>
    )
  }
  if (id === 4) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {facilities.map((f) => {
          const on = picked.has(f)
          return (
            <button
              key={f}
              onClick={() => setPicked((p) => { const n = new Set(p); n.has(f) ? n.delete(f) : n.add(f); return n })}
              className={`py-2 rounded-field text-[11px] font-medium flex items-center justify-center gap-1 transition-colors ${on ? 'bg-cyan/15 border border-cyan/40 text-cyan' : 'surface text-white/55'}`}
            >
              {on && <CheckIcon className="w-3 h-3" />} {f}
            </button>
          )
        })}
      </div>
    )
  }
  if (id === 5) {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        <input dir="ltr" placeholder="قیمت کل (تومان)" className={`${field} col-span-2`} />
        <input dir="ltr" placeholder="قیمت هر متر" className={field} />
        <input dir="ltr" placeholder="مبلغ رهن" className={field} />
      </div>
    )
  }
  if (id === 6) {
    return <textarea rows={3} placeholder="توضیحات تکمیلی دربارهٔ ملک..." className={`${field} resize-none leading-6`} />
  }
  if (id === 7) {
    return <input placeholder="منطقه، خیابان، پلاک..." className={field} />
  }
  return (
    <div className="rounded-field bg-black/30 border border-white/8 p-3">
      <p className="text-[12px] text-white/70 leading-6">پیش‌نمایش آگهی بر اساس اطلاعات واردشده ساخته می‌شود و پس از تأیید نهایی منتشر خواهد شد.</p>
    </div>
  )
}

export default function NewFile() {
  const navigate = useNavigate()
  const [open, setOpen] = useState<number | null>(1)
  const [done, setDone] = useState<Set<number>>(new Set())

  const markDone = (id: number) => {
    setDone((prev) => new Set(prev).add(id))
    const next = steps.find((s) => s.id === id + 1)
    setOpen(next ? next.id : null)
  }

  return (
    <PageTransition>
      <ScreenHeader title="ثبت فایل جدید" />

      <div className="px-6 space-y-2.5">
        {steps.map((s) => {
          const isOpen = open === s.id
          const isDone = done.has(s.id)
          return (
            <div key={s.id} className="surface rounded-card overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : s.id)} className="w-full flex items-center justify-between px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${isDone ? 'accent-fill' : 'bg-white/8 text-white/50'}`}>
                    {isDone ? <CheckIcon className="w-3.5 h-3.5 text-[#1A1D00]" /> : s.id}
                  </div>
                  <div className="text-right">
                    <span className="text-[13.5px] font-semibold text-white block">{s.title}</span>
                    {!isOpen && <span className="text-[10.5px] text-white/40">{s.desc}</span>}
                  </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="w-4 h-4 text-white/40" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1">
                      <p className="text-[11.5px] text-white/40 leading-6 mb-3">{s.desc}</p>
                      <StepBody id={s.id} />
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={() => markDone(s.id)}
                        className="mt-3.5 px-4 py-2 rounded-pill accent-fill text-[12px] font-bold"
                      >
                        تأیید این مرحله
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="px-6 mt-6">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/filing')}
          className="w-full py-3.5 rounded-pill accent-fill font-bold text-[14px]"
        >
          ذخیرهٔ فایل
        </motion.button>
      </div>
    </PageTransition>
  )
}
