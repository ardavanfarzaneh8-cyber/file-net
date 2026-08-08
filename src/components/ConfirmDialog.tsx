import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  open: boolean
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  danger?: boolean
  icon?: ReactNode
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = 'تأیید',
  cancelLabel = 'انصراف',
  danger = false,
  icon,
  onConfirm,
  onCancel,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
          className="fixed inset-0 z-[60] flex items-center justify-center px-8 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="surface-solid rounded-card p-6 w-full max-w-[320px] text-center"
          >
            <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${danger ? 'bg-redx/15 text-redx' : 'bg-accent/15 text-accent'}`}>
              {icon}
            </div>
            <h3 className="text-[16px] font-bold text-white mt-4">{title}</h3>
            <p className="text-[12.5px] text-white/55 leading-6 mt-2">{message}</p>
            <div className="flex gap-3 mt-6">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={onCancel}
                className="flex-1 py-3 rounded-pill surface text-white text-[13px] font-semibold"
              >
                {cancelLabel}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={onConfirm}
                className={`flex-1 py-3 rounded-pill text-[13px] font-bold ${danger ? 'bg-redx text-white' : 'accent-fill'}`}
              >
                {confirmLabel}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
