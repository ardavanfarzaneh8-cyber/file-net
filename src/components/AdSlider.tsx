import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// placeholder ad banners — real campaigns will be fed here later
const slides = [
  { id: 1, tag: 'فضای تبلیغات', title: 'بنر تبلیغاتی شما اینجا', sub: 'ویژهٔ آگهی‌دهندگان و برندها', from: '#F2F86A', to: '#C7D400', dark: true },
  { id: 2, tag: 'کمپین ویژه', title: 'معرفی پروژه‌های جدید', sub: 'فضای اختصاصی تبلیغات', from: '#3EE0F0', to: '#178a99', dark: true },
  { id: 3, tag: 'تبلیغات', title: 'جای تبلیغ شما خالی‌ست', sub: 'برای رزرو بنر تماس بگیرید', from: '#23232b', to: '#0e0e12', dark: false },
]

export default function AdSlider() {
  const [i, setI] = useState(0)
  const n = slides.length

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 4500)
    return () => clearInterval(t)
  }, [n])

  const go = (dir: number) => setI((p) => (p + dir + n) % n)

  return (
    <div>
      <div className="relative overflow-hidden rounded-card h-[150px]">
        <motion.div
          className="flex h-full"
          dir="ltr"
          style={{ width: `${n * 100}%` }}
          animate={{ x: `-${i * (100 / n)}%` }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) go(1)
            else if (info.offset.x > 50) go(-1)
          }}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              style={{ width: `${100 / n}%`, background: `linear-gradient(120deg, ${s.from}, ${s.to})` }}
              className="h-full relative shrink-0 flex flex-col justify-center px-5 overflow-hidden"
            >
              <span className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
              <span className="absolute left-10 -bottom-6 w-24 h-24 rounded-full bg-black/10" />
              <div dir="rtl" className={s.dark ? 'text-[#141400]' : 'text-white'}>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-pill mb-2 ${s.dark ? 'bg-black/15' : 'bg-white/15'}`}>
                  {s.tag}
                </span>
                <h3 className="text-[18px] font-extrabold leading-tight">{s.title}</h3>
                <p className={`text-[11.5px] mt-1 ${s.dark ? 'text-[#141400]/70' : 'text-white/70'}`}>{s.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-5 bg-accent' : 'w-1.5 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}
