import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import { CalcIcon } from '../components/Icons'

const faNum = (n: number) => (isFinite(n) ? Math.round(n).toLocaleString('fa-IR') : '۰')
const field = 'w-full bg-black/30 border border-white/10 rounded-field px-3 py-2.5 text-[13px] outline-none focus:border-accent/60 transition-colors text-white text-left'

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/6 last:border-0">
      <span className="text-[12px] text-white/55">{label}</span>
      <span className={`text-[14px] font-extrabold ${accent ? 'text-accent' : 'text-white'}`}>{value}</span>
    </div>
  )
}

function RentConverter() {
  const [deposit, setDeposit] = useState('500000000')
  const [rate, setRate] = useState('3')
  const d = Number(deposit) || 0
  const r = Number(rate) || 0
  const rent = (d * r) / 100

  return (
    <div className="surface-solid rounded-card p-5 space-y-3">
      <div>
        <label className="text-[11px] text-white/50 mb-1.5 block">مبلغ رهن / ودیعه (تومان)</label>
        <input dir="ltr" value={deposit} onChange={(e) => setDeposit(e.target.value.replace(/\D/g, ''))} className={field} />
      </div>
      <div>
        <label className="text-[11px] text-white/50 mb-1.5 block">نرخ تبدیل ماهانه (٪) — معمولاً ۳٪</label>
        <input dir="ltr" value={rate} onChange={(e) => setRate(e.target.value.replace(/[^\d.]/g, ''))} className={field} />
      </div>
      <div className="rounded-field bg-black/30 border border-white/8 p-4 mt-4">
        <Row label="اگر کل رهن به اجاره تبدیل شود" value={`${faNum(rent)} ت / ماه`} accent />
        <Row label="معادل هر ۱۰ میلیون رهن" value={`${faNum((10000000 * r) / 100)} ت اجاره`} />
      </div>
      <p className="text-[10.5px] text-white/35 leading-6">نرخ تبدیل بسته به توافق و منطقه متغیر است؛ عدد پیش‌فرض میانگین بازار است.</p>
    </div>
  )
}

function LoanCalc() {
  const [amount, setAmount] = useState('2000000000')
  const [annual, setAnnual] = useState('23')
  const [months, setMonths] = useState('60')
  const P = Number(amount) || 0
  const r = (Number(annual) || 0) / 12 / 100
  const n = Number(months) || 1
  const monthly = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const total = monthly * n

  return (
    <div className="surface-solid rounded-card p-5 space-y-3">
      <div>
        <label className="text-[11px] text-white/50 mb-1.5 block">مبلغ وام (تومان)</label>
        <input dir="ltr" value={amount} onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))} className={field} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[11px] text-white/50 mb-1.5 block">نرخ سود سالانه (٪)</label>
          <input dir="ltr" value={annual} onChange={(e) => setAnnual(e.target.value.replace(/[^\d.]/g, ''))} className={field} />
        </div>
        <div>
          <label className="text-[11px] text-white/50 mb-1.5 block">مدت (ماه)</label>
          <input dir="ltr" value={months} onChange={(e) => setMonths(e.target.value.replace(/\D/g, ''))} className={field} />
        </div>
      </div>
      <div className="rounded-field bg-black/30 border border-white/8 p-4 mt-4">
        <Row label="قسط ماهانه" value={`${faNum(monthly)} ت`} accent />
        <Row label="کل بازپرداخت" value={`${faNum(total)} ت`} />
        <Row label="کل سود" value={`${faNum(total - P)} ت`} />
      </div>
    </div>
  )
}

export default function Tools() {
  const [tab, setTab] = useState<'rent' | 'loan'>('rent')

  return (
    <PageTransition>
      <ScreenHeader title="ابزار محاسبه" />

      <div className="px-6">
        <div className="surface rounded-pill p-1 flex">
          {[
            { key: 'rent', label: 'تبدیل رهن و اجاره' },
            { key: 'loan', label: 'محاسبهٔ وام' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as 'rent' | 'loan')}
              className="relative flex-1 py-2.5 text-[12.5px] font-semibold"
            >
              {tab === t.key && (
                <motion.span layoutId="tools-tab" className="absolute inset-0 rounded-pill accent-fill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className={`relative z-10 flex items-center justify-center gap-1.5 ${tab === t.key ? 'text-[#1A1D00]' : 'text-white/55'}`}>
                <CalcIcon className="w-4 h-4" /> {t.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4">
          {tab === 'rent' ? <RentConverter /> : <LoanCalc />}
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
