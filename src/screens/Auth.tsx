import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMAGES } from '../data/mock'
import { CheckIcon, ProfileIcon, PhoneIcon, TagIcon } from '../components/Icons'
import AccentButton from '../components/AccentButton'

export default function Auth() {
  const navigate = useNavigate()
  const [agree, setAgree] = useState(false)

  const fields = [
    { icon: <ProfileIcon className="w-4 h-4" />, ph: 'نام و نام خانوادگی', dir: 'rtl' },
    { icon: <PhoneIcon className="w-4 h-4" />, ph: 'شماره همراه', dir: 'ltr' },
    { icon: <TagIcon className="w-4 h-4" />, ph: 'کد عضویت / پروانه اشتغال', dir: 'rtl' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen"
    >
      <div className="relative h-64 overflow-hidden rounded-b-[36px]">
        <img src={IMAGES.towerNight} alt="auth" className="w-full h-full object-cover" />
        <div className="absolute inset-0 scrim-bottom" />
        <div className="absolute top-14 inset-x-0 text-center">
          <h1 className="text-gradient-accent font-extrabold text-2xl tracking-[0.3em]">FILE-NET</h1>
          <p className="text-white/60 text-[12px] mt-1">پنل مشاوران املاک</p>
        </div>
      </div>

      <div className="px-7 -mt-12 relative z-10">
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
            className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-accent to-cyan/50 shadow-accent"
          >
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-3xl font-bold text-accent">
              ع م
            </div>
          </motion.div>
        </div>

        <div className="mt-7 space-y-3">
          {fields.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="surface rounded-field flex items-center gap-3 px-4 py-3.5"
            >
              <span className="text-accent">{f.icon}</span>
              <input
                dir={f.dir}
                placeholder={f.ph}
                className={`bg-transparent outline-none text-[13px] text-white flex-1 ${f.dir === 'ltr' ? 'text-left' : ''}`}
              />
            </motion.div>
          ))}
        </div>

        <button onClick={() => setAgree((a) => !a)} className="flex items-center gap-2.5 mt-5">
          <span className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${agree ? 'accent-fill border-transparent' : 'border-white/25'}`}>
            {agree && <CheckIcon className="w-3.5 h-3.5 text-[#1A1D00]" />}
          </span>
          <span className="text-[12px] text-white/60">مشاهده و قبول کردن <span className="text-cyan">قوانین و مقررات</span></span>
        </button>

        <div className="flex gap-3 mt-7">
          <AccentButton onClick={() => navigate('/home')} className="flex-1">ورود</AccentButton>
          <AccentButton onClick={() => navigate('/home')} variant="dark" className="flex-1">ثبت‌نام</AccentButton>
        </div>

        <p className="text-center text-[11px] text-white/35 mt-5">
          با ورود، شما شرایط استفاده از سرویس را می‌پذیرید
        </p>
      </div>
    </motion.div>
  )
}
