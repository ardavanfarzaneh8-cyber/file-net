import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import AccentButton from '../components/AccentButton'
import { IMAGES } from '../data/mock'
import { ImageIcon, SendIcon, CloseIcon } from '../components/Icons'

export default function SendMessage() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [attached, setAttached] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <PageTransition>
      <ScreenHeader title="ارسال پیام" />

      <div className="px-6">
        <div className="surface rounded-card px-4 py-3 flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-[11px] font-bold">VIP</span>
          <p className="text-[12.5px] text-white/70">گروه گیرنده: <span className="text-white font-semibold">مشتریان VIP</span> · ۲۴ نفر</p>
        </div>

        <div className="surface-solid rounded-card p-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="متن پیام خود را بنویسید..."
            rows={8}
            className="w-full bg-transparent outline-none text-[13.5px] text-white resize-none leading-7"
          />
        </div>

        <div className="mt-4">
          {attached ? (
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
              <img src={IMAGES.interiorWarm} className="w-full h-full object-cover" />
              <button
                onClick={() => setAttached(false)}
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-white"
              >
                <CloseIcon className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setAttached(true)}
              className="w-24 h-24 rounded-2xl surface flex flex-col items-center justify-center gap-1.5 text-cyan"
            >
              <ImageIcon className="w-6 h-6" />
              <span className="text-[10px] text-white/50">افزودن عکس</span>
            </motion.button>
          )}
        </div>

        <div className="mt-8">
          <AccentButton
            onClick={() => {
              if (!message.trim()) return
              setSent(true)
              setTimeout(() => navigate('/customers'), 900)
            }}
            className={!message.trim() ? 'opacity-40' : ''}
            icon={<SendIcon className="w-4 h-4 text-[#1A1D00] -scale-x-100" />}
          >
            {sent ? 'ارسال شد ✓' : 'ارسال پیام'}
          </AccentButton>
        </div>
      </div>
    </PageTransition>
  )
}
