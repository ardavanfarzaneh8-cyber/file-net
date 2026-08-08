type IconProps = { className?: string }

export const HomeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 10.5 12 3l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ListIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="5" width="16" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
    <rect x="4" y="15" width="16" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

export const PlusIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const MessageIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

export const ChatIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 5.5h16a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H9l-4 3.5V6.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8.5 10.5h7M8.5 13.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const ProfileIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5 20c1.2-3.8 4-5.6 7-5.6s5.8 1.8 7 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const BackIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronDown = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SearchIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const SlidersIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h9M17 17h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="15" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

export const StarIcon = ({ className, filled = true }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className}>
    <path d="M12 2.5l2.9 6.2 6.6.7-5 4.6 1.4 6.6L12 17.4 5.9 20.6l1.4-6.6-5-4.6 6.6-.7L12 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
)

export const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6.5 3h3l1.5 4-2 2a12 12 0 0 0 6 6l2-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const FolderIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19.5 19h-14A1.5 1.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const FilterIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 6h16M7.5 12h9M10.5 18h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const ImageIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4.5 17l5-4.5 3.2 2.8L17 11l3 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export const BuildingIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="3.5" width="14" height="17" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.5 7.5h1.4M14 7.5h1.4M8.5 11h1.4M14 11h1.4M8.5 14.5h1.4M14 14.5h1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10 20.5v-4h4v4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const TagIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M11.5 3.5H5v6.5l9.5 9.5 6.5-6.5-9.5-9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="8.6" cy="7.1" r="1.2" fill="currentColor" />
  </svg>
)

export const GraduationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2.5 8.5 12 4l9.5 4.5-9.5 4.5-9.5-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const CloseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const CheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const UsersIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 19c.9-3.3 3-5 5.5-5s4.6 1.7 5.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="17" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15.5 14c2.6.2 4.2 1.8 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const TrashIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 7h14M9.5 7V5.2A1.2 1.2 0 0 1 10.7 4h2.6a1.2 1.2 0 0 1 1.2 1.2V7M7.5 7l.7 12a1.5 1.5 0 0 0 1.5 1.4h4.6a1.5 1.5 0 0 0 1.5-1.4l.7-12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SendIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 12 20 4l-6 16-3-7-7-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const BellIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const HeartIcon = ({ className, filled = false }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className}>
    <path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.7a4.4 4.4 0 0 1 8.5 2.2C20.5 15 12 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
)

export const BookmarkIcon = ({ className, filled = false }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className}>
    <path d="M6 4h12v16l-6-4-6 4V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
)

export const MapPinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

export const BedIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 8v10M3 12h18v6M21 12v-1a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BathIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 12V6.5A2 2 0 0 1 8 4.5c1 0 1.6.6 1.8 1.4M6.5 18l-1 2M17.5 18l1 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const AreaIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 4v3M4 8h3M20 16h-3M16 20v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const CarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 16v2M19 16v2M4 15v-3l2-4.5A2 2 0 0 1 7.8 6h8.4a2 2 0 0 1 1.8 1.5L20 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4 12h16M7.5 14h.01M16.5 14h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const ChartIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 20V10M10 20V4M16 20v-7M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const MapIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const CalcIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 7h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const DocIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M13 3v5h5M9 13h6M9 16.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ShieldIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3l7 2.5V11c0 5-3.4 8-7 9.5C8.4 19 5 16 5 11V5.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 11.5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ClockIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ShareIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const ChevronLeft = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
