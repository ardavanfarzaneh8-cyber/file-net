import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { chatThread, type ChatMessage } from '../data/mock'
import { BackIcon, PhoneIcon, SendIcon, ImageIcon } from '../components/Icons'

export default function Chat() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState<ChatMessage[]>(chatThread)
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    setMessages((m) => [...m, { id: `m${Date.now()}`, from: 'me', text: text.trim(), time: 'الان' }])
    setText('')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col"
    >
      {/* header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-white/8 sticky top-0 z-20 bg-[#080809]/80 backdrop-blur-md">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="w-10 h-10 rounded-full surface flex items-center justify-center text-white/80">
          <BackIcon className="w-4 h-4 rotate-180" />
        </motion.button>
        <div className="w-10 h-10 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-[12px] font-bold">س م</div>
        <div className="flex-1">
          <p className="text-[14px] font-bold text-white">سارا محمدی</p>
          <p className="text-[11px] text-cyan">آنلاین</p>
        </div>
        <a href="tel:0" className="w-10 h-10 rounded-full surface flex items-center justify-center text-accent">
          <PhoneIcon className="w-4 h-4" />
        </a>
      </div>

      {/* messages */}
      <div className="flex-1 px-5 py-5 space-y-3 pb-28">
        <p className="text-center text-[11px] text-white/30">امروز</p>
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className={`flex ${m.from === 'me' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[78%] px-4 py-2.5 text-[13px] leading-6 ${
                  m.from === 'me'
                    ? 'accent-fill rounded-[20px] rounded-br-md'
                    : 'surface text-white rounded-[20px] rounded-bl-md'
                }`}
              >
                {m.text}
                <span className={`block text-[9.5px] mt-1 ${m.from === 'me' ? 'text-[#4a4d00]' : 'text-white/35'}`}>{m.time}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* composer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 pb-5 z-30">
        <div className="glass-nav rounded-pill px-2 py-2 flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 shrink-0">
            <ImageIcon className="w-5 h-5" />
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="پیام بنویسید..."
            className="flex-1 bg-transparent outline-none text-[13px] text-white"
          />
          <motion.button whileTap={{ scale: 0.85 }} onClick={send} className="w-10 h-10 rounded-full accent-fill flex items-center justify-center shrink-0">
            <SendIcon className="w-4 h-4 text-[#1A1D00] -scale-x-100" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
