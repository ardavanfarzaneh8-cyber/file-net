import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMAGES } from '../data/mock'
import { ArrowIcon, BackIcon, CheckIcon } from '../components/Icons'

export default function Intro() {
  const navigate = useNavigate()
  const go = () => navigate('/auth')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen overflow-hidden"
    >
      <motion.img
        src={IMAGES.villaPool}
        alt="intro"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 scrim-full" />

      <div className="relative z-10 flex flex-col min-h-screen px-7 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill surface text-[11px] text-accent font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> سامانه مشاوران املاک
          </span>
          <h1 className="text-[38px] leading-[1.25] text-white font-light">
            قدم‌های آسان تا
            <br />
            <span className="font-extrabold text-gradient-accent">مدیریت حرفه‌ای</span>
            <br />
            املاک شما
          </h1>
          <p className="text-white/55 text-[13px] leading-7 mt-4 max-w-[300px]">
            فایل‌هایت را ثبت کن، با مشتری‌ها در ارتباط باش و درخواست‌ها را همین‌جا مدیریت کن.
          </p>
        </motion.div>

        <div className="mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button className="w-12 h-12 rounded-full surface flex items-center justify-center text-white/50">
              <BackIcon className="w-4 h-4" />
            </button>

            <button onClick={go} className="flex-1 h-12 rounded-pill surface flex items-center justify-center gap-2 text-white font-semibold text-[14px]">
              شروع
              <span className="text-accent tracking-tight">›››</span>
            </button>

            <button onClick={go} className="w-12 h-12 rounded-full surface flex items-center justify-center text-white/50">
              <CheckIcon className="w-4 h-4" />
            </button>

            <motion.button
              onClick={go}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full accent-fill flex items-center justify-center"
            >
              <ArrowIcon className="w-5 h-5 text-[#1A1D00] rotate-180" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
