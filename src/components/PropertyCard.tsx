import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Property } from '../data/mock'
import { HeartIcon, BedIcon, BathIcon, AreaIcon, MapPinIcon } from './Icons'

const tagLabel: Record<string, string> = { hot: 'داغ', special: 'ویژه', new: 'جدید' }

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onClick={() => navigate(`/property/${property.id}`)}
      className="relative rounded-card overflow-hidden surface-solid cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 scrim-bottom" />

        {/* top row */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          {property.tag ? (
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-pill bg-black/45 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white">
              <span className={`w-1.5 h-1.5 rounded-full ${property.tag === 'hot' ? 'bg-redx' : property.tag === 'new' ? 'bg-cyan' : 'bg-accent'}`} />
              {tagLabel[property.tag]}
            </span>
          ) : <span />}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => { e.stopPropagation(); setSaved((s) => !s) }}
            className="w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/10 flex items-center justify-center"
          >
            <HeartIcon filled={saved} className={`w-4 h-4 ${saved ? 'text-redx' : 'text-white'}`} />
          </motion.button>
        </div>

        {/* bottom info */}
        <div className="absolute bottom-3 inset-x-4">
          <h3 className="text-[16px] font-bold text-white drop-shadow">{property.title}</h3>
          <div className="flex items-center gap-1 mt-1 text-white/70 text-[11.5px]">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span className="truncate">{property.address}</span>
          </div>
        </div>
      </div>

      {/* stats bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 text-white/70 text-[11.5px]">
          <span className="flex items-center gap-1.5"><BedIcon className="w-4 h-4 text-accent" />{property.beds} خواب</span>
          <span className="flex items-center gap-1.5"><BathIcon className="w-4 h-4 text-accent" />{property.baths}</span>
          <span className="flex items-center gap-1.5"><AreaIcon className="w-4 h-4 text-accent" />{property.area}م</span>
        </div>
        <span className="text-[13px] font-extrabold text-accent">{property.priceShort}</span>
      </div>
    </motion.div>
  )
}
