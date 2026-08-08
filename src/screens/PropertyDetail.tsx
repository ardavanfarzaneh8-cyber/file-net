import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { propertyById } from '../data/mock'
import { BackIcon, HeartIcon, MapPinIcon, BedIcon, BathIcon, AreaIcon, CarIcon, ChatIcon, BookmarkIcon, PhoneIcon } from '../components/Icons'
import StatChip from '../components/StatChip'

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = propertyById(id || '')
  const [saved, setSaved] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState(0)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/60">فایل یافت نشد</div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* hero image */}
      <div className="relative h-[56vh] overflow-hidden">
        <motion.img
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={property.gallery[active]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#060608]" />

        <div className="absolute top-6 inset-x-6 flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
          >
            <BackIcon className="w-4 h-4 rotate-180" />
          </motion.button>
          <span className="text-[13px] font-bold text-white bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-pill border border-white/10">جزئیات ملک</span>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setSaved((s) => !s)}
            className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center"
          >
            <HeartIcon filled={saved} className={`w-5 h-5 ${saved ? 'text-redx' : 'text-white'}`} />
          </motion.button>
        </div>

        {/* gallery thumbs */}
        <div className="absolute bottom-6 inset-x-6 flex gap-2">
          {property.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-colors ${active === i ? 'border-accent' : 'border-white/20'}`}
            >
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* sheet */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative -mt-6 rounded-t-[30px] surface-solid px-6 pt-5 pb-32"
      >
        <div className="w-10 h-1 rounded-full bg-white/15 mx-auto mb-4" />

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-[18px] font-extrabold text-white">{property.title}</h1>
            <div className="flex items-center gap-1 mt-1.5 text-white/50 text-[12px]">
              <MapPinIcon className="w-4 h-4 text-cyan" />
              <span>{property.address}</span>
            </div>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-pill bg-cyan/15 border border-cyan/30 text-cyan text-[11px] font-semibold">
            {property.deal === 'sale' ? 'فروش' : 'رهن و اجاره'}
          </span>
        </div>

        <div className="mt-4 p-4 rounded-card bg-black/30 border border-white/8 flex items-end justify-between">
          <div>
            <p className="text-[11px] text-white/40">قیمت</p>
            <p className="text-[24px] font-extrabold text-accent leading-tight mt-0.5">{property.priceShort}</p>
          </div>
          <p className="text-[11px] text-white/45 mb-1">{property.price}</p>
        </div>

        {/* stats */}
        <div className="mt-4 flex gap-2.5">
          <StatChip icon={<BedIcon className="w-5 h-5" />} label={`${property.beds} خواب`} />
          <StatChip icon={<BathIcon className="w-5 h-5" />} label={`${property.baths} سرویس`} />
          <StatChip icon={<AreaIcon className="w-5 h-5" />} label={`${property.area} متر`} />
          <StatChip icon={<CarIcon className="w-5 h-5" />} label={`${property.parking} پارک`} />
        </div>

        {/* description */}
        <div className="mt-6">
          <h2 className="text-[14px] font-bold text-white mb-2">توضیحات ملک</h2>
          <p className={`text-[12.5px] text-white/55 leading-7 ${expanded ? '' : 'line-clamp-3'}`}>
            {property.desc}
          </p>
          <button onClick={() => setExpanded((e) => !e)} className="text-accent text-[12px] font-semibold mt-1">
            {expanded ? 'بستن' : 'نمایش بیشتر'}
          </button>
        </div>

        {/* owner */}
        <div className="mt-5 surface rounded-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-[13px] font-bold">
              {property.owner.split(' ')[1]?.[0] || 'م'}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">{property.owner}</p>
              <p className="text-[11px] text-white/45">مالک · <span dir="ltr">{property.phone}</span></p>
            </div>
          </div>
          <a href={`tel:${property.phone}`} className="w-10 h-10 rounded-full accent-fill flex items-center justify-center">
            <PhoneIcon className="w-4 h-4 text-[#1A1D00]" />
          </a>
        </div>
      </motion.div>

      {/* bottom action bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 pb-5 z-40">
        <div className="glass-nav rounded-pill px-3 py-2.5 flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/chat')}
            className="w-12 h-12 rounded-full surface flex items-center justify-center text-cyan shrink-0"
          >
            <ChatIcon className="w-5 h-5" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.97 }} className="flex-1 h-12 rounded-pill accent-fill font-bold text-[14px]">
            رزرو بازدید
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSaved((s) => !s)}
            className="w-12 h-12 rounded-full surface flex items-center justify-center shrink-0"
          >
            <BookmarkIcon filled={saved} className={`w-5 h-5 ${saved ? 'text-accent' : 'text-white/70'}`} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
