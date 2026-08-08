import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'
import PropertyRow from '../components/PropertyRow'
import { agent, properties, IMAGES } from '../data/mock'
import { PhoneIcon, ChatIcon, ShareIcon, StarIcon, MapPinIcon, CheckIcon } from '../components/Icons'
import { useNavigate } from 'react-router-dom'

export default function AgentSite() {
  const navigate = useNavigate()
  const stats = [
    { label: 'فایل فعال', value: agent.stats.files },
    { label: 'معاملات', value: agent.stats.deals },
    { label: 'امتیاز', value: agent.stats.rating },
  ]

  return (
    <PageTransition>
      <div className="relative">
        <div className="relative h-44 overflow-hidden">
          <img src={IMAGES.cityNight} alt="cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#060608]" />
        </div>
        <div className="absolute top-0 inset-x-0">
          <ScreenHeader
            title="سایت شخصی"
            right={
              <button className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent">
                <ShareIcon className="w-4 h-4" />
              </button>
            }
          />
        </div>
      </div>

      <div className="px-6 -mt-16 relative z-10">
        <div className="surface-solid rounded-card p-5">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-accent to-cyan/50 shrink-0 shadow-accent">
              <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-2xl font-bold text-accent">ع م</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-[17px] font-extrabold text-white">{agent.name}</h1>
                <span className="w-4 h-4 rounded-full bg-cyan flex items-center justify-center"><CheckIcon className="w-2.5 h-2.5 text-[#00252b]" /></span>
              </div>
              <p className="flex items-center gap-1 text-[11.5px] text-white/50 mt-1"><MapPinIcon className="w-3.5 h-3.5" /> {agent.role}</p>
              <div className="flex items-center gap-1 mt-1.5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="w-3.5 h-3.5 text-accent" />)}
                <span className="text-[11px] text-white/50 mr-1">{agent.stats.rating}</span>
              </div>
            </div>
          </div>

          <p className="text-[12px] text-white/55 leading-7 mt-4">{agent.bio}</p>

          <div className="flex gap-2.5 mt-4">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 bg-black/25 border border-white/8 rounded-field py-3 flex flex-col items-center gap-0.5">
                <span className="text-[16px] font-extrabold text-white">{s.value}</span>
                <span className="text-[10px] text-white/45">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2.5 mt-4">
            <a href={`tel:${agent.phone}`} className="flex-1 accent-fill rounded-pill py-3 flex items-center justify-center gap-2 text-[13px] font-bold">
              <PhoneIcon className="w-4 h-4 text-[#1A1D00]" /> تماس
            </a>
            <motion.button whileTap={{ scale: 0.96 }} onClick={() => navigate('/chat')} className="flex-1 surface rounded-pill py-3 flex items-center justify-center gap-2 text-[13px] font-semibold text-cyan">
              <ChatIcon className="w-4 h-4" /> گفتگو
            </motion.button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 mb-3">
          <h2 className="text-[14px] font-bold text-white">فایل‌های این مشاور</h2>
          <span className="text-[11px] text-white/40">{properties.length} فایل</span>
        </div>
        <div className="space-y-3">
          {properties.map((p, i) => (
            <PropertyRow key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>

      <BottomNav />
    </PageTransition>
  )
}
