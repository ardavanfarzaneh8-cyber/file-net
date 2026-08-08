import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Property } from '../data/mock'
import { HeartIcon, MapPinIcon, StarIcon } from './Icons'

const tagLabel: Record<string, string> = { hot: 'داغ', special: 'ویژه', new: 'جدید' }

export default function PropertyRow({ property, index = 0 }: { property: Property; index?: number }) {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/property/${property.id}`)}
      className="surface rounded-card p-2.5 flex gap-3 items-stretch cursor-pointer"
    >
      <div className="relative w-24 h-24 shrink-0 rounded-[18px] overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        {property.tag && (
          <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-pill bg-black/55 backdrop-blur-md text-[9px] font-semibold text-white">
            {tagLabel[property.tag]}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0 py-0.5 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13.5px] font-bold text-white truncate">{property.title}</h3>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => { e.stopPropagation(); setSaved((s) => !s) }}
            className="shrink-0 text-white/45"
          >
            <HeartIcon filled={saved} className={`w-[18px] h-[18px] ${saved ? 'text-redx' : 'text-white/45'}`} />
          </motion.button>
        </div>

        <div className="flex items-center gap-1 mt-1 text-white/45 text-[11px]">
          <MapPinIcon className="w-3.5 h-3.5" />
          <span className="truncate">{property.address}</span>
        </div>

        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < property.rating} className={`w-3 h-3 ${i < property.rating ? 'text-accent' : 'text-white/15'}`} />
          ))}
        </div>

        <div className="mt-auto pt-1.5 flex items-center justify-between">
          <span className="text-[13px] font-extrabold text-accent">{property.priceShort}</span>
          <span className="text-[10.5px] text-cyan font-medium">اطلاعات بیشتر ›</span>
        </div>
      </div>
    </motion.div>
  )
}
