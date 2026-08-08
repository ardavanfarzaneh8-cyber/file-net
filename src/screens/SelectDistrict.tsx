import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import { districts } from '../data/mock'
import { SearchIcon, CheckIcon } from '../components/Icons'

export default function SelectDistrict() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <PageTransition>
      <ScreenHeader
        title="انتخاب منطقه"
        right={
          <button className="w-11 h-11 rounded-full surface flex items-center justify-center text-white/80">
            <SearchIcon className="w-4 h-4" />
          </button>
        }
      />

      <div className="px-6">
        <div className="surface rounded-card p-4">
          <p className="text-accent text-[13px] leading-7 font-semibold">
            کاربر گرامی: لطفاً منطقهٔ شهرداری حوزهٔ فعالیت خود را انتخاب کنید!
          </p>
          <p className="text-redx text-[12px] mt-1 font-medium">
            ⚠ شما مجاز به انتخاب فقط یک منطقه می‌باشید!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {districts.map((d, i) => {
            const active = selected === d
            return (
              <motion.button
                key={d}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setSelected(d)}
                className={`relative rounded-card py-5 flex items-center justify-center transition-colors ${
                  active ? 'accent-fill' : 'surface'
                }`}
              >
                <span className={`text-[16px] font-bold ${active ? 'text-[#1A1D00]' : 'text-accent'}`}>{d}</span>
                {active && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-cyan flex items-center justify-center ring-2 ring-[#0A0A0C]"
                  >
                    <CheckIcon className="w-3 h-3 text-[#003] " />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        <div className="surface rounded-card p-5 mt-6">
          <h3 className="text-[13px] font-bold text-white mb-2">توضیحات</h3>
          <p className="text-[12px] text-white/50 leading-7">
            انتخاب منطقهٔ شهرداری به شما امکان می‌دهد فایل‌های ملکی مرتبط با حوزهٔ فعالیت خود را راحت‌تر مدیریت
            کرده و آگهی‌های ثبت‌شده در آن منطقه را مشاهده و پیگیری نمایید. این انتخاب فقط یک‌بار امکان‌پذیر است.
          </p>
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
